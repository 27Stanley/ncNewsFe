import React from "react";
import { createContext, useState } from "react";


export const UsernameContext = createContext()

export const UsernameProvider = ({children}) => {
    const [username, setUsername] = useState("jessjelly")

    return (
        <UsernameContext.Provider value={{username, setUsername}}>
            {children}
        </UsernameContext.Provider>
    )
}