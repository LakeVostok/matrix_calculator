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
                <MatrixBoard
                    Result={this.state.Result}
                    A={this.state.A}
                    B={this.state.B}
                />
            </div>  
        );
    }
}
