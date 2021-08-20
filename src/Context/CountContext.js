import React, {Component, createContext, useContext, useState} from 'react'
import {} from 'react-native'


 const PostContext = createContext();



export default function PostProvider ({children})
{
    const [count, setCount] = useState(0);

    return (
        <PostContext.Provider value={{  count, setCount }}>
           {children}
        </PostContext.Provider>
      );
}

export  function useCount(){
    const context = useContext(countcontext)
    const {cout, setCount} = context
    return {count, setCount}
}