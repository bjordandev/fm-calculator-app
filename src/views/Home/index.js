import React, { useState, useCallback } from "react";
import classes from "./index.module.css"

import HomeHeader from "./HomeHeader"
import HomeScreen from "./HomeScreen"
import HomeControls from "./HomeControls"

function Home() {
    const [ result, setResult ] = useState("0");
    const [ mode, setMode ] = useState("input");

    return (
        <div className={classes.home}>
            <HomeHeader />
            <HomeScreen result={result} />
            <HomeControls
                mode={mode}
                setMode={setMode}
                setResult={setResult}
            />
        </div>
    )
}

export default Home;

