import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }){
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const html = document.documentElement;

        html.classList.toggle("light", !darkMode);
    }, [darkMode]);

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                setDarkMode
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}