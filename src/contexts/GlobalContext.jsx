import { createContext, useState, useReducer } from "react";
import partyReducer from '../reducers/partyReducer';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const [sidebarState, setSidebarState] = useState(false);
    const [partyData, partyDispatcher] = useReducer(partyReducer, { data: [], isLoading: false, error: undefined });

    return (
        <GlobalContext.Provider value={{ sidebarState, setSidebarState, partyData, partyDispatcher }}>
            {children}
        </GlobalContext.Provider>
    )
}