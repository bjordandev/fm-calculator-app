import React, { useContext } from "react";
import classes from "./index.module.css"

import ToggleTheme from "../../shared/Toggle/ToggleTheme";
import ToggleThemeGroup from "../../shared/Toggle/ToggleTheme/ToggleThemeGroup";

import ThemeContext from "../../../contexts/themes.context"



function CalculatorTheme() {
    const theme = useContext(ThemeContext);
    
    function handleChange(e) {
        theme.setTheme(e.target.value);
    }

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
                    <ToggleThemeGroup 
                        radioId={"one"} 
                        radioName={"name"}
                        radioValue={"one"}
                        handleChange={handleChange}
                        radioChecked={theme.value === "one"}
                    />
                    <ToggleThemeGroup 
                        radioId={"two"} 
                        radioName={"name"}
                        radioValue={"two"}
                        handleChange={handleChange}
                        radioChecked={theme.value === "two"}
                    />
                    <ToggleThemeGroup 
                        radioId={"three"} 
                        radioName={"name"}
                        radioValue={"three"}
                        handleChange={handleChange}
                        radioChecked={theme.value === "three"}
                    />
                </ToggleTheme>
            </div>
        </div>
    )
}

export default CalculatorTheme