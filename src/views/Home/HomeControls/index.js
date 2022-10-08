import React from "react" 
import classes from "./index.module.css"

import CalculatorControls from "../../../components/Calculator/CalculatorControls"
import ButtonSymbol from "../../../components/shared/Button/ButtonSymbol";
import ButtonCommand from "../../../components/shared/Button/ButtonCommand";
import ButtonEqual from "../../../components/shared/Button/ButtonEqual";


function HeaderControls() {
    return (
        <div className={classes.headerControls}>
            <CalculatorControls>
                <div style={{gridArea: "zone-1"}}>
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-2"}}>
                    <ButtonSymbol>8</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-3"}}>
                    <ButtonSymbol>9</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-4"}}>
                    <ButtonCommand>Del</ButtonCommand>
                </div>
                <div style={{gridArea: "zone-5"}}>
                    <ButtonSymbol>4</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-6"}}>
                    <ButtonSymbol>5</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-7"}}>
                    <ButtonSymbol>6</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-8"}}>
                    <ButtonSymbol>+</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-9"}}>
                    <ButtonSymbol>1</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-10"}}>
                    <ButtonSymbol>2</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-11"}}>
                    <ButtonSymbol>3</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-12"}}>
                    <ButtonSymbol>-</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-13"}}>
                    <ButtonSymbol>.</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-14"}}>
                    <ButtonSymbol>0</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-15"}}>
                    <ButtonSymbol>/</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-16"}}>
                    <ButtonSymbol>x</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-17"}}>
                    <ButtonCommand>Reset</ButtonCommand>
                </div>
                <div style={{gridArea: "zone-18"}}>
                    <ButtonEqual>=</ButtonEqual>
                </div>
            </CalculatorControls>
        </div>
    )
}

export default HeaderControls