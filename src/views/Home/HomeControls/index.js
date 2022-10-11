import React from "react" 
import classes from "./index.module.css"

import CalculatorControls from "../../../components/Calculator/CalculatorControls"
import ButtonSymbol from "../../../components/shared/Button/ButtonSymbol";
import ButtonCommand from "../../../components/shared/Button/ButtonCommand";
import ButtonEqual from "../../../components/shared/Button/ButtonEqual";

import * as Calculus from "../../../utils/calculus/functions"
import * as CalculusConst from "../../../utils/calculus/constants";
import * as Validator from "../../../utils/validator/functions";

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

                const isValueOperation = Validator.isStringValidToken(value, [...CalculusConst.ADDER_SYMBOLS, ...CalculusConst.MULTIPLIER_SYMBOLS])

                if (isValueOperation) return Calculus.addTokenToMathExpression(result, value);
                return value.toString();
            }

            return Calculus.addTokenToMathExpression(result, value);
        });
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

            const isResultValidExpression = Calculus.isExpressionValid(result);

            if (!isResultValidExpression) return "Erreur";

            const evaluatedResult = eval(result);
            return evaluatedResult.toString();
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