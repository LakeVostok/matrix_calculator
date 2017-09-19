import React, { Component } from "react";

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
            </div>
        );
    }
}
