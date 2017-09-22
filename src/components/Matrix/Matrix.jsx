import React, { Component } from "react";
import PropTypes from "prop-types";

import Gapped from "../Gapped";
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
                        <Gapped gap={10} vertical>
                            { data.map(this.renderRow) }
                        </Gapped>
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
                <Gapped gap={10}>
                    {
                        row.map((cell, j) => this.renderCell(cell, j, i))
                    }
                </Gapped>
            </div>
        );
    }

    renderCell = (cell, j, i) => {
        let placeholder = `${this.props.placeholder}${i+1},${j+1}`;

        return (
            <div key={j+"cell"+i} className="matrix--cell">
                <Input
                    value={cell}
                    placeholder={placeholder}
                    disabled={this.props.disabled}
                    onChange={e => this.props.onChange(i, j, e.target.value)}
                    showErrors={this.props.showErrors}
                />
            </div>
        );
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
    labelBottom: PropTypes.string,

    /**
     * Show errors in empty inputs
     */
    showErrors: PropTypes.bool,

    /**
     * Placeholder prefix in inputs
     */
    placeholder: PropTypes.string,

    /**
     * Change handler to inputs
     */
    onChange: PropTypes.func
};
