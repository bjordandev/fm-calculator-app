import classes from "./index.module.css";
import React from "react";

import ButtonBase from "../ButtonBase";

function ButtonCommand(props) {
    return (
        <ButtonBase customClassName={classes.buttonCommand} {...props} />
    )
}

export default ButtonCommand;
