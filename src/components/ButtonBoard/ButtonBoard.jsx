import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ButtonBoard.scss";

import { Button, ArrowButton } from "../Button";
import { Radio, RadioGroup } from "../Radio";
import Gapped from "../Gapped";

export default class ButtonBoard extends Component {
    render() {
        return (
            <div className="button-board">
                <div className="group--arrow">
                    <ArrowButton onClick={this.props.multiply}>Умножить матрицы</ArrowButton>
                </div>
                <div className="group--button">
                    <Button onClick={this.props.clear} icon="clear">Очистить матрицы</Button>
                </div>
                <div className="group--button">
                    <Button onClick={this.props.swap} icon="swap">Поменять матрицы местами</Button>
                </div>
                <div className="group--radio">
                    <RadioGroup
                        name="active_matrix"
                        checked={this.props.active}
                        onChange={this.props.selectActive}
                    >
                        <Gapped gap={17}>
                            <Radio value="A">Матрица А</Radio>
                            <Radio value="B">Матрица В</Radio>
                        </Gapped>
                    </RadioGroup>

                </div>

                <div className="group--button">
                    <Gapped gap={10}>
                        <Button onClick={() => this.props.editSize("row", 1)} icon="add">Добавить</Button>
                        <Button onClick={() => this.props.editSize("row", -1)} icon="remove">Удалить</Button>
                        cтроку
                    </Gapped>
                </div>

                <div className="group--button">
                    <Gapped gap={10}>
                        <Button onClick={() => this.props.editSize("column", 1)} icon="add">Добавить</Button>
                        <Button onClick={() => this.props.editSize("column", -1)} icon="remove">Удалить</Button>
                        cтолбец
                    </Gapped>
                </div>
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
