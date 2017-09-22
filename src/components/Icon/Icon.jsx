import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Icon.scss";

export default class Icon extends Component {
    constructor(props) {
        super(props);
        
        this.names = {
            "cancel": "\uE012",
            "swap": "\uE01F",
            "add": "\uE00D",
            "remove": "\uE00E"
        };
    }

    render() {
        let icon = this.names[this.props.name];

        if(!icon) {
            throw new Error(`Can not find icon ${this.props.name}`);
        }

        return (
            <span className="icon">{icon}</span>
        );
    }
}

Icon.propTypes = {
    /**
     * Icon name
     */
    name: PropTypes.string.isRequired
};
