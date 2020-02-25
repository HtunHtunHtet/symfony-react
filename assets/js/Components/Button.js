import React , { Component } from 'react';
import propTypes from 'prop-types';


export default function Button (props) {

    const {className , ...otherProps} =props;

    return (
        <button
            className={`btn ${className}`}
            {...otherProps}
        >
            {props.children}
        </button>
    )
}

Button.propTypes ={
    className : propTypes.string
}

Button.defaultProps = {
    className : ''
}
