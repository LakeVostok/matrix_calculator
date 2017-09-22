import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Gapped extends Component {
    render() {
        let { children, gap } = this.props;

        let first = true;

        let getStyle = () => ({
            display: "inline-block",
            marginLeft: first ? null : gap
        });

        let items = React.Children.map(children, child => {
            let style = getStyle();
            first = false;
    
            return (
                <div style={style}>
                    {child}
                </div>
            )
        });

        return <div>{items}</div>
    }
}

Gapped.propTypes = {
    /**
     * Elements to gap
     */
    children: PropTypes.node,

    /**
     * Distance between elements
     */
    gap: PropTypes.number
};
