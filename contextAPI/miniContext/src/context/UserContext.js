import React from "react";

// making a context

const UserContext = React.createContext() // Storing the context in a variable called "UserContext"

export default UserContext; // exporting the UserContext

// Every Context gives a provider
// Here, UserContext is also a provider
// We will use this Context as a provide later as a wrapper and then everything inside that wrapper can access that context
// context is bascially a global variable

