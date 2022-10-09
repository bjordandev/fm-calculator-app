import React from "react" 
import classes from "./index.module.css"

import CalculatorControls from "../../../components/Calculator/CalculatorControls"
import ButtonSymbol from "../../../components/shared/Button/ButtonSymbol";
import ButtonCommand from "../../../components/shared/Button/ButtonCommand";
import ButtonEqual from "../../../components/shared/Button/ButtonEqual";

import * as Calculus from "../../../utils/calculus.utils";

function HomeControls(props) {
    const { 
        mode,
        setMode,
        setResult 
    } = props;

    const buttonSymbolHandleClick = (e) => {
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
    };

    const buttonDelHandleClick = (e) => {
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
    };

    const buttonResetHandleClick = (e) => {
        setResult("0");
    };

    const buttonEqualHandleClick = (e) => {
        setResult(result => {
            setMode("calcul");
            if (!Calculus.isValidOperation(result)) return result;

            try {
                return (Math.floor(eval(result) * (10**6)) / (10**6)).toString();
            } catch(e) {
                return "Error"
            }
        });
    };

    return (
        <div className={classes.headerControls}>
            <CalculatorControls>
                <div style={{gridArea: "zone-1"}}>
                    <ButtonSymbol onClick={buttonSymbolHandleClick} value="7">7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-2"}}>
                    <ButtonSymbol onClick={buttonSymbolHandleClick} value="8">8</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-3"}}>
                    <ButtonSymbol onClick={buttonSymbolHandleClick} value="9">9</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-4"}}>
                    <ButtonCommand onClick={buttonDelHandleClick}>Del</ButtonCommand>
                </div>
                <div style={{gridArea: "zone-5"}}>
                    <ButtonSymbol onClick={buttonSymbolHandleClick} value="4">4</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-6"}}>
                    <ButtonSymbol onClick={buttonSymbolHandleClick} value="5">5</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-7"}}>
                    <ButtonSymbol onClick={buttonSymbolHandleClick} value="6">6</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-8"}}>
                    <ButtonSymbol onClick={buttonSymbolHandleClick} value="+">+</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-9"}}>
                    <ButtonSymbol onClick={buttonSymbolHandleClick} value="1">1</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-10"}}>
                    <ButtonSymbol onClick={buttonSymbolHandleClick} value="2">2</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-11"}}>
                    <ButtonSymbol onClick={buttonSymbolHandleClick} value="3">3</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-12"}}>
                    <ButtonSymbol onClick={buttonSymbolHandleClick} value="-">-</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-13"}}>
                    <ButtonSymbol onClick={buttonSymbolHandleClick} value=".">.</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-14"}}>
                    <ButtonSymbol onClick={buttonSymbolHandleClick} value="0">0</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-15"}}>
                    <ButtonSymbol onClick={buttonSymbolHandleClick} value="/">/</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-16"}}>
                    <ButtonSymbol onClick={buttonSymbolHandleClick} value="*">x</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-17"}}>
                    <ButtonCommand onClick={buttonResetHandleClick}>Reset</ButtonCommand>
                </div>
                <div style={{gridArea: "zone-18"}}>
                    <ButtonEqual onClick={buttonEqualHandleClick}>=</ButtonEqual>
                </div>
            </CalculatorControls>
        </div>
    )
}

export default React.memo(HomeControls);