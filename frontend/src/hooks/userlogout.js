import React, { useState } from 'react'
import { useAuthContext } from '../context/Authcontext';


const useLogout = () => {

    const [loading, setLoading] = useState(false);
    const { setauthUser } = useAuthContext();
 
    const logout = async () => {
        setLoading(true);
        try{
            const res = await fetch("http://localhost:8000/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.removeItem("chat-user");

            setauthUser(null);
            


        }catch(error){
            toast.error(error.message);

        }finally{
            setLoading(false);
        }
    };
    return { loading, logout };
}

export default useLogout;