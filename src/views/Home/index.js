import React, { useState, useEffect } from "react";
import classes from "./index.module.css"

import HomeHeader from "./HomeHeader"
import HomeScreen from "./HomeScreen"
import HomeControls from "./HomeControls"

import * as Calculus from "../../utils/calculus.utils";

function Home() {
    const [ result, setResult ] = useState("0");
    const [ mode, setMode ] = useState("input");

    function buttonSymbolHandleClick(e) {
        const { value }  = e.target ;

        setResult(result => {
            if (mode === "calcul") {
                setMode("input");

                if (Calculus.isCharOperation(value)) { 
                    return Calculus.addToken(result, value);
                } else {
                    return value.toString();
                }
            }

            return Calculus.addToken(result, value);
        })
    }

    function buttonDelHandleClick(e) {
        setResult(result => {
            if (mode === "calcul") {
                setMode("input");
                setResult("0");
            } else {
                const resultArray = result.split("");
                resultArray.pop();

                if (resultArray.length === 0) {
                    resultArray.push("0");
                }

                return resultArray.join("");
            }            
        });
    }

    function buttonResetHandleClick(e) {
        setResult("0");
    }

    function buttonEqualHandleClick(e) {
        setResult(result => {
            setMode("calcul");
            if (!Calculus.isValidOperation(result)) return result;
            return (Math.floor(eval(result) * (10**6)) / (10**6)).toString();
        });
    }

    return (
        <div className={classes.home}>
            <HomeHeader />
            <HomeScreen result={result} />
            <HomeControls
                buttonEqualHandleClick={buttonEqualHandleClick}
                buttonResetHandleClick={buttonResetHandleClick} 
                buttonDelHandleClick={buttonDelHandleClick} 
                buttonSymbolHandleClick={buttonSymbolHandleClick}
            />
        </div>
    )
}

export default Home;

