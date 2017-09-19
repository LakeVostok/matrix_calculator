import React, { Component } from "react";
import PropTypes from "prop-types";

import Input from "../Input";

import "./Matrix.scss";

export default class Matrix extends Component {
    render() {
        let { data, labelRight, labelBottom } = this.props;

        return (
            <div className="matrix">
                {
                    data.map(this.renderRow)
                }
            </div>
        );
    }

    renderRow = (row, i) => {
        return (
            <div key={i+"row"} className="matrix--row">
                {
                    row.map((cell, j) => this.renderCell(cell, j, i))
                }
            </div>
        )
    }

    renderCell = (cell, j, i) => {
        return (
            <div key={j+"cell"+i} className="matrix--cell">
                <Input value={cell} />
            </div>
        )
    }
}

Matrix.propTypes = {
    /**
     * Data for the matrix
     */
    data: PropTypes.arrayOf(PropTypes.array),

    /**
     * Label at the right of matrix
     */
    labelRight: PropTypes.string,

    /**
     * Label at the bottom of matrix
     */
    labelBottom: PropTypes.string
};
