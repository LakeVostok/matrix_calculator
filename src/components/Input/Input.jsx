import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Input.scss";

export default class Input extends Component {
    render() {
        let { value, onChange, disabled, placeholder, showErrors } = this.props;
        let error = !value && showErrors;
        let className = `input${error ? " error": ""}`;

        return (
            <input
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                className={className}
            />
        );
    }
}

Input.propTypes = {
    /**
     * Value for input element
     */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),

    /**
     * Disabled state of input element
     */
    disabled: PropTypes.bool,

    /**
     * Placeholder for input
     */
    placeholder: PropTypes.string,

    /**
     * Change handler
     */
    onChange: PropTypes.func,

    /**
     * Show/hide error
     */
    showErrors: PropTypes.bool
};
