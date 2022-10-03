import "./styles/reset.scss";
import './styles/index.scss';

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App/>);
