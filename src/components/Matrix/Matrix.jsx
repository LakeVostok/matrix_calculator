import React, { Component } from "react";
import PropTypes from "prop-types";

import Input from "../Input";

import "./Matrix.scss";

export default class Matrix extends Component {
    render() {
        let { data, labelRight, labelBottom } = this.props;

        return (

            <div className="matrix--wrapper">
                <div className="matrix">
                    <div className="bracket bracket--left"></div>
                    <div className="matrix--data">
                        {
                            data.map(this.renderRow)
                        }
                    </div>
                    <div className="bracket bracket--right"></div>
                    { labelRight && <div className="label label--right">{labelRight}</div> }
                </div>
                { labelBottom && <div className="label label--bottom">{labelBottom}</div> }
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
        let placeholder = `${this.props.placeholder}${i+1},${j+1}`
        return (
            <div key={j+"cell"+i} className="matrix--cell">
                <Input
                    value={cell}
                    placeholder={placeholder}
                    disabled={this.props.disabled}
                    onChange={e => this.props.onChange(i, j, e.target.value)}
                />
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
