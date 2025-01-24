import React, { useState } from "react";

// must import previous .js file
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

    const [userCred, setUserCred] = useState(null)

    return (
        <UserContext.Provider value={{userCred, setUserCred}} >
            {children} // taking children and returning means just return whatever comes
        </UserContext.Provider>
    )
}

export default UserContextProvider