import React, { Component } from "react";
import Matrix from "../Matrix"

export default class MatrixBoard extends Component {
    render() {
        let { A, B, Result } = this.props;
        return (
            <div>
                <div>
                    <Matrix data={Result}  />
                    <Matrix data={A} labelRight="A"/>
                </div>
                <div>
                    <Matrix data={B} labelBottom="B" />
                </div>
            </div>  
        );
    }
}
