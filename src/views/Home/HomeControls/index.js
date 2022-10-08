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
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-3"}}>
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-4"}}>
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-5"}}>
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-6"}}>
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-7"}}>
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-8"}}>
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-9"}}>
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-10"}}>
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-11"}}>
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-12"}}>
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-13"}}>
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-13"}}>
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-14"}}>
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
                <div style={{gridArea: "zone-14"}}>
                    <ButtonSymbol>7</ButtonSymbol>
                </div>
            </CalculatorControls>
        </div>
    )
}

export default HeaderControls