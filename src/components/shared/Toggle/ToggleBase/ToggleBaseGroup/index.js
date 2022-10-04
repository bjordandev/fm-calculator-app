import classes from "./index.module.css";
import React from "react";
import PropTypes from "prop-types";

function ToggleBaseGroup(props) {
    const {
        radioId,
        radioName,
        groupClassName,
        inputClassName,
        labelClassName
    } = props;

    return (
        <div className={`${classes.toggleBaseGroup} ${groupClassName}`}>
            <input id={radioId} 
                   name={radioName} 
                   className={`${classes.toggleBaseInput} ${inputClassName}`} 
                   type="radio" 
            />
            <label 
                htmlFor={radioId}
                className={`${classes.toggleBaseLabel} ${labelClassName}`}
            >
            </label>
        </div>
    )
}

ToggleBaseGroup.defaultProps = {
    groupClassName:"",
    inputClassName:"",
    labelClassName:"",
}

ToggleBaseGroup.propTypes = {
    radioId:PropTypes.string,
    radioName:PropTypes.string,
    groupClassName:PropTypes.string,
    inputClassName:PropTypes.string
}

export default ToggleBaseGroup;