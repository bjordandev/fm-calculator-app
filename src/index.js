import "./reset.css";
import './index.css';

import React from "react";
import ReactDOM from "react-dom";

import { themeOne } from "./config/themes";
import ThemeContext from "./contexts/themes.context";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
<ThemeContext.Provider value={themeOne}>
    <App/>
</ThemeContext.Provider>
);
