import classes from "./index.module.css";
import React from "react"; 

import ToggleBase from "../ToggleBase";

function ToggleTheme(props) {
    return (
        <ToggleBase 
            customClassName={classes.toggleTheme}
            {...props}
        />
    )
}

export default ToggleTheme;