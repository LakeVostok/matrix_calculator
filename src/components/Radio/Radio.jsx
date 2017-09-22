import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Radio.scss";

export class RadioGroup extends Component {
    render() {
        return (
            <div
                onChange={this.props.onChange}
                className="radio-group"
            >
                {this.props.children}
            </div>
        );
    }

    getChildContext() {
        let { name, checked } = this.props;

        return {
            radioContext: {
                name, checked
            }
        };
    }
}

RadioGroup.childContextTypes = {
    radioContext: PropTypes.object
};


RadioGroup.propTypes = {
    /**
     * Name of input
     */
    name: PropTypes.string,

    /**
     * Checked state of input
     */
    checked: PropTypes.string
};  


export class Radio extends Component {
    render() {
        let { name, checked } = this.context.radioContext;
        let { children, value } = this.props;
  
        return (
            <label>
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={value==checked}
                    className="radio--input"
                />
                <div className="radio--button"></div>
                { children }
            </label>
        );
    }
};

Radio.contextTypes = {
    radioContext: PropTypes.object
};

Radio.propTypes = {
    /**
     * Label content
     */
    children: PropTypes.node,

    /**
     * Value of input
     */
    value: PropTypes.string
};
