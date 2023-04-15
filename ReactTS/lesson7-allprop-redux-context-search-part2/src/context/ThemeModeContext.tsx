import { createContext,useState } from "react";

interface propType{
    children:any
}

type AppContextType={}

export const ThemeModeContext = createContext<AppContextType|any>(null);

export const ThemeModeProvider =(props:propType)=>{
    const [theme,setTheme] = useState<string>("light");
    
    return <ThemeModeContext.Provider value={[theme,setTheme]}>
        {props.children}
    </ThemeModeContext.Provider>
}
