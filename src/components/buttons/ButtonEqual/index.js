import commonClasses from "../common.module.css";
import classes from "./index.module.css";

import React from "react";

function ButtonEqual(props) {
    const { children, onClick } = props;
    const className = `${commonClasses.button} ${classes.buttonEqual}`

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonEqual;