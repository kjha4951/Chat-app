import { useContext, useEffect, useState } from "react";
import React from 'react';
import toast from "react-hot-toast";
import { useAuthContext } from "../context/Authcontext";

const useGetConversations = () => {
  const [loading, setLoading] = React.useState(false);
  const [conversations, setConversations] = useState([]);
  const {  setauthUser } = useAuthContext();

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8000/api/users");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setauthUser(data);
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversation();
  }, []);
  return { loading, conversations };
};

export default useGetConversations; 