import React from "react"
import classes from "./index.module.css"

import CalculatorScreen from "../../../components/Calculator/CalculatorScreen";

function HomeScreen() {
    return (
        <div className={classes.homeScreen}>
            <CalculatorScreen>
                100
            </CalculatorScreen>
        </div>
    )
}

export default HomeScreen