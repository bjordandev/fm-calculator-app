import classes from "./index.module.css"; 

import React from "react"; 

function CalculatorControls(props) {
    const { children } = props;

    return (
        <div className={classes.calculatorControls}>
            {children}
        </div>
    )
}

export default CalculatorControls;