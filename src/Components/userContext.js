import React , {createContext} from "react";

 const UserContext = createContext()

//provider and consumer and export it according to the need
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export  {UserProvider, UserConsumer}