import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const [sidebarState, setSidebarState] = useState(false);

    return (
        <GlobalContext.Provider value={{ sidebarState, setSidebarState }}>
            {children}
        </GlobalContext.Provider>
    )
}