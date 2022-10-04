import commonClasses from "../common.module.css";
import classes from "./index.module.css";

import React from "react";
import PropTypes from "prop-types";


function ButtonCommand(props) {
    const { children, onClick, customStyles } = props;
    const className = `${commonClasses.button} ${classes.buttonCommand}`

    return (
        <button style={customStyles} className={className} onClick={onClick}>
            {children}
        </button>
    )
}

ButtonCommand.defaultProps = {
    children:"",
}

ButtonCommand.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    customStyles: PropTypes.object
}

export default ButtonCommand;