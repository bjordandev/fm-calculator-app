import React from "react";
import classes from "./index.module.css"


import ToggleTheme from "../../shared/Toggle/ToggleTheme";
import ToggleThemeGroup from "../../shared/Toggle/ToggleTheme/ToggleThemeGroup";

function CalculatorTheme() {
    return (
        <div className={classes.calculatorTheme}>
            <h3 className={classes.calculatorThemeTitle}>Theme</h3>
            <div className={classes.calculatorThemeToggle}>
                <div className={classes.calculatorThemeNumbers}>
                    <span className={classes.calculatorThemeNumber}>1</span>
                    <span className={classes.calculatorThemeNumber}>2</span>
                    <span className={classes.calculatorThemeNumber}>3</span>
                </div>
                <ToggleTheme>
                    <ToggleThemeGroup radioId={"one"} radioName={"name"} />
                    <ToggleThemeGroup radioId={"two"} radioName={"name"} />
                    <ToggleThemeGroup radioId={"three"} radioName={"name"} />
                </ToggleTheme>
            </div>
        </div>
    )
}

export default CalculatorTheme