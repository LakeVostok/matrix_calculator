import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Gapped.scss";

export default class Gapped extends Component {
    render() {
        let { children, gap, vertical, wrap } = this.props;

        let first = true;
        let marginDir = vertical ? "marginTop" : "marginLeft";

        let getStyle = () => ({
            display: !vertical ? "inline-block" : null,
            [marginDir]: first ? null : gap
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

        return <div className={ wrap ? "" : "nowrap"}>{items}</div>
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
    gap: PropTypes.number,

    /**
     * Display element in vertical direction
     */
    vertical: PropTypes.bool,

    /**
     * Move gapped items to a new line if there is not enough space
     */
    wrap: PropTypes.bool
};
