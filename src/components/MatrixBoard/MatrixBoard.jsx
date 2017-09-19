import React, { Component } from "react";
import Matrix from "../Matrix"

export default class MatrixBoard extends Component {
    render() {
        let { A, B, Result, onChange } = this.props;
        return (
            <div>
                <div>
                    <Matrix
                        data={Result}
                        placeholder="c"
                        disabled
                    />
                    <Matrix
                        data={A}
                        placeholder="a"
                        labelRight="A"
                        onChange={(row, column, value) => onChange("A", row, column, value)}
                    />
                </div>
                <div>
                    <Matrix
                        data={B}
                        placeholder="b"
                        labelBottom="B"
                        onChange={(row, column, value) => onChange("B", row, column, value)}
                    />
                </div>
            </div>  
        );
    }
}
