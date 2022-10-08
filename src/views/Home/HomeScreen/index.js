import React from "react"
import classes from "./index.module.css"

import CalculatorScreen from "../../../components/Calculator/CalculatorScreen";

function HomeScreen({result}) {
    return (
        <div className={classes.homeScreen}>
            <CalculatorScreen>
                {result}
            </CalculatorScreen>
        </div>
    )
}

export default HomeScreen