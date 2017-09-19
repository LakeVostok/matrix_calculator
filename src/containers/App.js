import React, { Component } from "react";
import MatrixBoard from "../components/MatrixBoard"

function Storage(rows, columns) {
    let storage = [];

    for(let i = 0; i < rows; i++) {
        storage.push([]);

        for(let j = 0; j < columns; j++) {
            storage[i].push("")
        }
    }

    return storage;
}

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            A: Storage(4, 2),
            B: Storage(2, 3),
            Result: Storage(4,3)
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.multiply}>mult</button>
                <MatrixBoard
                    Result={this.state.Result}
                    A={this.state.A}
                    B={this.state.B}
                    onChange={this.changeHandler}
                />
            </div>  
        );
    }

    changeHandler = (matrixName, row, column, value) => {
        let matrix = this.state[matrixName];
        matrix[row][column] = value;
        this.setState({ [matrixName]: matrix });
    }

    multiply = () => {
        let { A, B, Result } = this.state;

        let rows = Result.length;
        let columns = Result[0].length;

        let newResult = Storage(rows, columns);

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                let result = 0;

                for(var y = 0; y < B.length; y++) {
                    result += A[i][y] * B[y][j];
                }

                newResult[i][j] = result;
            }
        }

        this.setState({ Result: newResult })
    }
}
