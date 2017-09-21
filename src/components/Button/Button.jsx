import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Button.scss";

export default class Button extends Component {
    render() {
        let { children, onClick, disabled } = this.props;

        return <button className="button" onClick={onClick} disabled={disabled}>{children}</button>;
    }
}

Button.propTypes = {
    /**
     * Button content
     */
    children: PropTypes.node,

    /**
     * Click handler of button
     */
    onClick: PropTypes.func,

    /**
     * Disabled state of button
     */
    disabled: PropTypes.bool
};
