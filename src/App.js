import React, { useState } from "react"; 
import Home from "./views/Home";

import { ThemeContextProvider } from "./contexts/themes.context";

function App() {
    const [theme, setTheme] = useState('one');

    return (
        <main className="app" data-theme={theme}>
            <ThemeContextProvider value={{
                value:theme,
                setTheme:setTheme
            }}>
                <Home />
            </ThemeContextProvider>
        </main>
    );
}

export default App;