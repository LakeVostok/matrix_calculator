import React, { Component } from "react";
import "./App.scss";

import MatrixBoard from "../components/MatrixBoard";
import ButtonBoard from "../components/ButtonBoard"

import { Matrix, Result } from "./Matrix.js";

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            A: new Matrix(4, 2),
            B: new Matrix(2, 3),
            active: "B"
        }        
    }

    componentWillMount() {
        this.initResult(this.state.A, this.state.B);
    }

    render() {
        return (
            <div className="calculator">
                <ButtonBoard
                    multiply={this.multiply}
                    clear={this.clear}
                    swap={this.swap}
                    active={this.state.active}
                    selectActive={this.selectActive}
                    addRow={this.addRow}
                    editSize={this.editSize}
                    error={this.state.A.columnsCount() != this.state.B.rowsCount()}
                />
                <MatrixBoard
                    Result={this.state.Result.storage}
                    A={this.state.A.storage}
                    B={this.state.B.storage}
                    onChange={this.changeHandler}
                />
            </div>  
        );
    }

    initResult = (A, B) => {
        this.setState({ Result: new Result(A, B) });
    }

    updateResult = () => {
        this.state.Result.update();
        this.forceUpdate();
    }

    selectActive = e => {
        this.setState({ active: e.target.value });
    }

    changeHandler = (matrixName, row, column, value) => {
        let matrix = this.state[matrixName];
        matrix.setValue(row, column, value);
        
        this.forceUpdate();
    }

    multiply = () => {
        let { A, B, Result } = this.state;

        let rows = Result.rowsCount();
        let columns = Result.columnsCount();

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                let result = 0;

                for(let y = 0; y < B.rowsCount(); y++) {
                    result += A.getValue(i, y) * B.getValue(y, j);
                }

                Result.setValue(i, j, result);
            }
        }

        this.setState({ Result });
    }

    clear = () => {
        let { A, B, Result } = this.state;

        A.clear();
        B.clear();
        Result.clear();

        this.setState({ A, B, Result });
    }

    swap = () => {
        let { A, B } = this.state;

        this.setState({
            A: B,
            B: A,
            Result: new Result(B, A)
        })
    }

    editSize = (unit, amount) => {
        let activeMatrix = this.state[this.state.active];

        if(unit == "row") {
            amount > 0 ? activeMatrix.addRow() : activeMatrix.removeRow();
        }
        else {
            amount > 0 ? activeMatrix.addColumn() : activeMatrix.removeColumn();
        }

        this.updateResult();
    }
}
