import classes from "./index.module.css";
import React from "react"; 
import PropTypes from "prop-types";

function ToggleBase(props) {
    const { 
        children,
        customClassName  
    } = props;

    return (
        <div className={`${classes.toggleBase} ${customClassName}`}>
            {children}
        </div>
    )
}

ToggleBase.defaultProps = {
    customClassName:"",
}

ToggleBase.propTypes = {
   customClassName:PropTypes.string
}

export default ToggleBase; 