import { createContext } from "react";

export const context = createContext();

const ContextProvider = (props) => {


    const onSent = async (prompt) => 

    const contextValue = {
      await runchat
    } 
    return(
        //.?
        <context.Provider value={contextValue}>
           {props.children}
        </context.Provider>
    )
}

export default ContextProvider