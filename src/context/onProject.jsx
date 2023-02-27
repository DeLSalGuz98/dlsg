import { createContext, useState } from "react";

export const onProjectContext = createContext();

export const OnProjectContextProvider = ({children})=>{
    const [isTrue, setIsTrue] = useState(false);
    return(
        <onProjectContext.Provider value={{isTrue, setIsTrue}}>
            {children}
        </onProjectContext.Provider>
    )
}