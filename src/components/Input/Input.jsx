import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Input.scss";

export default class Input extends Component {
    render() {
        let { value, onChange, disabled, placeholder } = this.props;
        return (
            <input
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                className="input"
            />
        );
    }
}

Input.propTypes = {
    /**
     * Value for input element
     */
    value: PropTypes.string,

    /**
     * Disabled state of input element
     */
    disabled: PropTypes.bool
};
