import commonClasses from "../common.module.css";
import classes from "./index.module.css";

import React from "react";
import PropTypes from "prop-types";


function ButtonSymbol(props) {
    const { children, onClick, customStyles } = props;
    const className = `${commonClasses.button} ${classes.buttonSymbol}`

    return (
        <button style={customStyles} className={className} onClick={onClick}>
            {children}
        </button>
    )
}

ButtonSymbol.defaultProps = {
    children:"",
}

ButtonSymbol.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    customStyles: PropTypes.object
}

export default ButtonSymbol;