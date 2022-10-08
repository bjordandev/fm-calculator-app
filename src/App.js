import React, { useState } from "react"; 
import CalculatorTheme from "./components/CalculatorTheme";
import CalculatorTitle from "./components/CalculatorTitle";

function App() {
    const [theme, setTheme] = useState('one');

    const handleTheme = (id) => {
        switch (id) {
            case 1:
                setTheme("one");
                break;
            case 2: 
                setTheme("two");
                break;
            case 3:
                setTheme("three");
                break;
            default:
                break;
        }
    }
    
    return (
        <main className="app" data-theme={theme}>
            <CalculatorTitle />
            <CalculatorTheme />
        </main>
    );
}

export default App;