import React, {Component, createContext, useContext, useState} from 'react'
import {} from 'react-native'


 const UserContext = createContext();






 export default function UserProvider ({children})
 {
 
 const [user, setUser] = useState({
     login:null,
     senha:null,
     logado:false,
     nome: null,
     id:0
 })
 
 //const [user, setUser] = useState("");
 
   
 
     return (
         <UserContext.Provider
           value={{
             user,
             setUser
           }}
         >
            {children}
         </UserContext.Provider>
       );
     
      
 }
 
 
 
 export  function useUser (){
     
         const context = useContext(UserContext)
         const {user, setUser} = context
         return {user, setUser}
     
 }