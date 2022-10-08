import classes from "./index.module.css"
import React from "react"; 


function CalculatorScreen(props) {
    const { children } = props; 
    return (
        <div className={classes.calculatorScreen}>
            <p className={classes.calculatorScreenText}>
                {children}
            </p>
        </div>
    )
}

export default React.memo(CalculatorScreen);