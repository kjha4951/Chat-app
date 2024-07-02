import React, { useState } from 'react'
import { useAuthContext } from '../context/Authcontext';

const useLogin = () => {
 
    const [loading, setLoading] = useState(false);
    const {setauthUser}=useAuthContext()

    const login =async(username,password)=>{

        const success = handleInputErrors(username,password);
        if (!success) return;
        setLoading(true)
      try {

        const res = await fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error);
        }
        localStorage.setItem("chat-user", JSON.stringify(data));
        setauthUser(data);

        
      } catch (error) {
        
          toast.error(error.message);
      }finally{
        setLoading(false)
      }

    }
    return {loading,login}
}

export default useLogin;


function handleInputErrors(username, password) {
    if ( !username || !password ) {
        toast.error("Please fill all the fields");
        return false;
    }

    return true;
}
