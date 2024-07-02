

import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateTokeAndSetCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "password and confirm password does not match" });
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "user already exists" });
        }
        //hash password here
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password: hashpassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })
        console.log(newUser);

        if (newUser) {

            generateTokeAndSetCookie(newUser._id, res);

            await newUser.save(); //save user to db
            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                // password:newUser.password,
                // gender:newUser.gender,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(400).json({ error: "invalid user data" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal server error " });
    }
}

export const login = async (req, res) => {
    try {

        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "invalid username or password" });
        }
        generateTokeAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        });

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal server error " });
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "successfully logged out" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal server error " });
    }
}