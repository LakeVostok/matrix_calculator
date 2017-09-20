import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ButtonBoard extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.multiply}>Умножить матрицы</button>
                <br />
                <button onClick={this.props.clear}>Очистить матрицы</button>
                <br />
                <button onClick={this.props.swap}>Поменять матрицы местами</button>
                <br />
                <input onChange={this.props.selectActive} value="A" type="radio" name="choose" />Матрица А
                <input onChange={this.props.selectActive} value="B" type="radio" name="choose" />Матрица В
                <br />
                <button onClick={() => this.props.editSize("row", 1)}>Добавить</button>
                <button onClick={() => this.props.editSize("row", -1)}>Удалить</button> Строку
                <br />
                <button onClick={() => this.props.editSize("column", 1)}>Добавить</button>
                <button onClick={() => this.props.editSize("column", -1)}>Удалить</button> Столбец
            </div>
        );
    }
}

ButtonBoard.propTypes = {
    /**
     * Callback to multiply matrixes
     */
    multiply: PropTypes.func,

    /**
     * Callback to clear matrixes
     */
    clear: PropTypes.func,

    /**
     * Callback to swap matrixes
     */
    swap: PropTypes.func,

    /**
     * Callback to switch active matrix
     */
    selectActive: PropTypes.func,

    /**
     * Callback to add row
     */
    addRow: PropTypes.func,

    /**
     * Callback to remove row
     */
    removeRow: PropTypes.func,

    /**
     * Callback to add column
     */
    addColumn: PropTypes.func,

    /**
     * Callback to remove column
     */
    removeColumn: PropTypes.func
};
