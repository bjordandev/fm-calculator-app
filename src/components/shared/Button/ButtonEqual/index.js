import classes from "./index.module.css";
import React from "react";

import ButtonBase from "../ButtonBase";

function ButtonEqual(props) {
    return (
        <ButtonBase customClassName={classes.buttonEqual} {...props} />
    )
}

export default ButtonEqual;
