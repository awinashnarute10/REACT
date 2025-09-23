import { createContext } from "react";

const UserContext = createContext({    // creating a context and giving it initial default value
    loggedInUser: "Defualt User"
});

export default UserContext;