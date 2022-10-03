import React from "react";
import classes from "./index.module.css";

function ButtonCommand(props) {
    const { children, onClick } = props;

    return (
        <button className={classes.buttonCommand} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonCommand;