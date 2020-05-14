import React, { createContext, useState, useEffect, useMemo } from "react";
import { Auth } from "aws-amplify";

// create initial context to hold the value that gets passed into components
export const UserContext = createContext(null)

// this function is the controller for authorising users and passing
// the data into the UserContext.
function AuthProvider() {
    
    const [authData, setAuthData] = useState(null)

    // run once to get the current user from Amplify
    useEffect(() => {

        Auth.currentUserInfo()
            .then((user) => setAuthData(user))
            .catch((err) => setAuthData(null))
        
    }, []);

    // useMemo stores the authData in memory to ensure that components
    // dont re-render unless the data has changed.
    const values = useMemo(() => ({authData}), [authData])
    

    return (
        <></>
    )

}

export default AuthProvider;