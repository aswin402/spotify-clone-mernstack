import { axiosInstance } from "@/lib/axios";
import { useChatStore } from "@/stores/useChatStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { useAuth } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useState, useEffect} from 'react';


const updateApiToken = (token : string | null) => {
    if(token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
};


export const AuthProvider = ({children}: {children: React.ReactNode}) =>{
    const {getToken , userId} = useAuth();
    const [loading, setLoading] = useState(true);

    const {checkAdminStatus} = useAuthStore();
    const {initSocket , disconnectSocket} = useChatStore(); 


    useEffect(() => {
     const initAuth = async() =>{
      try{
       const token = await getToken();
       console.log("token",token) 
       updateApiToken(token);
       if(token){ 
        await checkAdminStatus();
        if(userId ) initSocket(userId);
       
       }
      }catch(error){
        updateApiToken(null);
       console.error('Error fetching auth token:', error);
      }finally{
       setLoading(false);
      }
     }
     initAuth();
     //clean up===========
     return () =>{
      disconnectSocket();
     }; 
  },[getToken, userId, checkAdminStatus, initSocket, disconnectSocket]);

  if(loading){
    return <div className="h-screen w-full flex justify-center items-center">
        <Loader className="size-8 text-emerald-500 animate-spin" />
    </div>
  }
  return <div>{children}</div>
};