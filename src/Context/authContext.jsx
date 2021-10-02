import React, {createContext, useContext, useState} from 'react'

export const AuthContext = createContext(false);

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
                {props.children}
            </AuthContext.Provider>
        </div>
    )
}

