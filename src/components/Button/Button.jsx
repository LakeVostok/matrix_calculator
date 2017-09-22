import React, { Component } from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";

import "./Button.scss";

export class Button extends Component {
    constructor(props) {
        super(props);

        this.className = "button";
    }

    render() {
        let { children, onClick, disabled, icon } = this.props;

        return (
            <button className={this.className} onClick={onClick} disabled={disabled}>
                { icon && <Icon name={icon}/> }
                {children}
            </button>
        );
    }
}

export class ArrowButton extends Button {
    constructor(props) {
        super(props);

        this.className = "arrow-button";
    }

    render() {
        return (
            <div className="arrow-button--wrapper">
                { super.render() }
            </div>
        );
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
    disabled: PropTypes.bool,

    /**
     * Name of nested icon
     */
    icon: PropTypes.string
};
