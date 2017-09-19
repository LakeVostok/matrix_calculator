import React, { Component } from "react";
import Matrix from "../Matrix"

export default class MatrixBoard extends Component {
    render() {
        let { A, B, Result } = this.props;
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
                    />
                </div>
                <div>
                    <Matrix
                        data={B}
                        placeholder="b"
                        labelBottom="B"
                    />
                </div>
            </div>  
        );
    }
}
