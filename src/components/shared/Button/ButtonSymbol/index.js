import classes from "./index.module.css";
import React from "react";

import ButtonBase from "../ButtonBase";

function ButtonSymbol(props) {
    return (
        <ButtonBase customClassName={classes.buttonSymbol} {...props} />
    )
}

export default ButtonSymbol;
