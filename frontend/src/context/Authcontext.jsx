// import { json } from "express/lib/response";
import { createContext ,useContext,useState } from "react";


export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContectProvider = ({ children }) => {
    const [authUser,setauthUser] = useState(JSON.parse(localStorage.getItem("chat-user"))||null);

    return <AuthContext.Provider value={{authUser,setauthUser}}>
        {children}
        </AuthContext.Provider>;
};
