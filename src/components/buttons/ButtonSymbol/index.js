import React from "react";
import classes from "./index.module.css";

function ButtonSymbol(props) {
    const { children, onClick } = props;

    return (
        <button className={classes.buttonSymbol} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonSymbol;