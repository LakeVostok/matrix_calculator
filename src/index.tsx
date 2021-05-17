import React from "react";
import ReactDOM from "react-dom";

import { MatrixCalculator } from "./components/organisms/MatrixCalculator/MatrixCalculator";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

const MIN_ROWS_COUNT = 2;
const MAX_ROWS_COUNT = 9;
const MIN_COLUMNS_COUNT = 2;
const MAX_COLUMNS_COUNT = 9;

const MATRIX_A_INITIAL_ROWS_COUNT = 4;
const MATRIX_A_INITIAL_COLUMNS_COUNT = 2;
const MATRIX_B_INITIAL_ROWS_COUNT = 2;
const MATRIX_B_INITIAL_COLUMNS_COUNT = 3;

class ErrorBoundary extends React.PureComponent {
	componentDidCatch() {
		// eslint-disable-next-line no-restricted-globals
		const res = confirm("Что -то сломалось. Обновить страницу?");
		if (res) {
			// eslint-disable-next-line no-restricted-globals
			location.reload();
		}
	}

	render() {
		return this.props.children;
	}
}

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundary>
			<MatrixCalculator
				minRowsCount={ MIN_ROWS_COUNT }
				maxRowsCount={ MAX_ROWS_COUNT }
				minColumnsCount={ MIN_COLUMNS_COUNT }
				maxColumnsCount={ MAX_COLUMNS_COUNT }
				matrixAInitialRowsCount={ MATRIX_A_INITIAL_ROWS_COUNT }
				matrixAInitialColumnsCount={ MATRIX_A_INITIAL_COLUMNS_COUNT }
				matrixBInitialRowsCount={ MATRIX_B_INITIAL_ROWS_COUNT }
				matrixBInitialColumnsCount={ MATRIX_B_INITIAL_COLUMNS_COUNT }
			/>
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
