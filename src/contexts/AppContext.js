import React from "react";

export const AppDataContext = React.createContext({
    users:[],
    posts:[],
    comments:[],
    isLoading: false
});


export const useAppDataContext = () => React.useContext(AppDataContext)


const AppDataContextProvider = ({children}) => {
    const data = useAppData()
    return <AppDataContext.Provider value={data}>
        {children}
    </AppDataContext.Provider>
}

export default AppDataContextProvider;