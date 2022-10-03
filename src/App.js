import React, { useState } from "react"; 

import { ThemeContextProvider } from "./contexts/themes.context";

function App() {
    const [theme, setTheme] = useState('one');

    const handleTheme = (id) => {
        switch (id) {
            case 1:
                setTheme("one");
                break;
            case 2: 
                setTheme("two");
                break;
            case 3:
                setTheme("three");
                break;
            default:
                break;
        }
    }

    return (
        <main className="app" data-theme={theme}>
            <ThemeContextProvider value={{ theme, setTheme: handleTheme }}>
            </ThemeContextProvider>
        </main>
    );
}

export default App;