import React, { Component } from "react";
import Matrix from "../Matrix";
import Gapped from "../Gapped";

import "./MatrixBoard.scss";

export default class MatrixBoard extends Component {
    render() {
        let { A, B, Result, onChange, showErrors } = this.props;
        return (
            <div className="matrix-board">
                <Gapped gap={40} vertical>
                    <Gapped gap={40}>
                        <Matrix
                            data={Result}
                            placeholder="c"
                            disabled
                        />
                        <Matrix
                            data={A}
                            placeholder="a"
                            labelRight="A"
                            onChange={(row, column, value) => onChange("A", row, column, value.replace(/[^0-9]/, ""))}
                            showErrors={showErrors}
                        />
                    </Gapped>
                    <Matrix
                        data={B}
                        placeholder="b"
                        labelBottom="B"
                        onChange={(row, column, value) => onChange("B", row, column, value)}
                        showErrors={showErrors}
                    />
                </Gapped>
            </div>  
        );
    }
}
