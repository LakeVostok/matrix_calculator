import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Gapped extends Component {
    render() {
        let { children, gap, vertical } = this.props;

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
    gap: PropTypes.number,

    /**
     * Display element in vertical direction
     */
    vertical: PropTypes.bool
};
