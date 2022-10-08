import React from "react" 
import classes from "./index.module.css"

import CalculatorControls from "../../../components/Calculator/CalculatorControls"
import ButtonSymbol from "../../../components/shared/Button/ButtonSymbol";
import ButtonCommand from "../../../components/shared/Button/ButtonCommand";
import ButtonEqual from "../../../components/shared/Button/ButtonEqual";


function HeaderControls(props) {
    const { 
        buttonSymbolHandleClick,
        buttonDelHandleClick,
        buttonResetHandleClick,
        buttonEqualHandleClick 
    } = props;

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

export default HeaderControls