import classes from "./index.module.css";
import React from "react";
import PropTypes from "prop-types";

function ButtonBase(props) {
    const { children, 
            customClassName 
    } = props;
    
    const propsToAdd = {
        ...props
    };

    delete propsToAdd["customClassName"];

    return (
        <button className={`${classes.buttonBase} ${customClassName}`} 
                {...propsToAdd}
        >
            {children}
        </button>
    )
}

ButtonBase.defaultProps = {
    customClassName:"",
}

ButtonBase.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    customClassName: PropTypes.string
}

export default ButtonBase;