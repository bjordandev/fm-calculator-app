import React from "react"
import classes from "./index.module.css"

import CalculatorTitle from "../../../components/Calculator/CalculatorTitle";
import CalculatorTheme from "../../../components/Calculator/CalculatorTheme";

function HomeHeader() {
    return (
        <header className={classes.homeHeader}>
            <div className={classes.homeHeaderTitle}>
                <CalculatorTitle />
            </div>
            <CalculatorTheme />
        </header>
    )
}

export default HomeHeader