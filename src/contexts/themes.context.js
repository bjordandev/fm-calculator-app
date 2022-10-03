import React from "react";

const ThemeContext = React.createContext({
    theme:"one",
    setTheme(id) {

    }
});

const ThemeContextProvider = ThemeContext.Provider;
const ThemeContextConsumer = ThemeContext.Consumer;

export {
    ThemeContextProvider,
    ThemeContextConsumer
} 