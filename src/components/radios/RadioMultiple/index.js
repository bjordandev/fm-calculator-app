import classes from "./index.module.css";
import React from "react"; 

function RadioMultiple() {
    return (
        <div className={classes.radioMultiple}>
            <div className={classes.radioMultipleGroup}>
                <input id="1" name="radio" className={classes.radioMultipleInput} type="radio" />
                <label htmlFor="1" className={classes.radioMultipleLabel}></label>
            </div>
            <div className={classes.radioMultipleGroup}>
                <input id="2" name="radio" className={classes.radioMultipleInput} type="radio" />
                <label htmlFor="2" className={classes.radioMultipleLabel}></label>
            </div>
            <div className={classes.radioMultipleGroup}>
                <input id="3" name="radio" className={classes.radioMultipleInput} type="radio" />
                <label htmlFor="3" className={classes.radioMultipleLabel}></label>
            </div>
        </div>
    )
}

export default RadioMultiple;