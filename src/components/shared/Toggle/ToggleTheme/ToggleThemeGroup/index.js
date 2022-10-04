import classes from "./index.module.css"
import React from "react"; 

import ToggleBaseGroup from "../../ToggleBase/ToggleBaseGroup";

function ToggleThemeGroup(props) {
    return (
        <ToggleBaseGroup
            groupClassName={classes.toggleThemeGroup}
            labelClassName={classes.toggleThemeLabel}
            {...props}
        />
    )
}

export default ToggleThemeGroup;