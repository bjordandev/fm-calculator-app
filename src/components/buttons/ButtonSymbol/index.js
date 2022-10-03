import commonClasses from "../common.module.css";
import classes from "./index.module.css";

import React from "react";

function ButtonCommand(props) {
    const { children, onClick } = props;
    const className = `${commonClasses.button} ${classes.buttonSymbol}`

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonCommand;