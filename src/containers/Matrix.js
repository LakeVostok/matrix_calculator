class Storage {
    constructor(rows, columns) {
        this.storage = [];

        for(let i = 0; i < rows; i++) {
            this.storage.push([]);

            for(let j = 0; j < columns; j++) {
                this.storage[i].push("");
            }
        }
    }
}

class Matrix extends Storage {
    rowsCount = () => this.storage.length

    columnsCount = () => this.storage[0].length

    getValue = (row, column) => this.storage[row][column]

    setValue = (row, column, value) => this.storage[row][column] = value

    clear = () => {
        let rows = this.rowsCount(), columns = this.columnsCount();

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < columns; j++) {
                this.storage[i][j] = "";
            }
        }
    }

    addRow = () => {
        let columns = this.columnsCount(), row = [];

        for(let i = 0; i < columns; i++) {
            row.push("");
        }
    
        this.storage.push(row);
    }

    removeRow = () => this.storage.pop()

    addColumn = () => {
        let rows = this.rowsCount();

        for(let i = 0; i < rows; i++) {
            this.storage[i].push("");
        }
    }

    removeColumn = () => {
        let rows = this.rowsCount();
        
        for(let i = 0; i < rows; i++) {
            this.storage[i].pop();
        }
    }
}

class Result extends Matrix {
    constructor(A, B) {
        super(A.rowsCount(), B.columnsCount());

        this.A = A;
        this.B = B;
    }

    update = () => {
        let selfRows = this.rowsCount(), a = this.A.rowsCount();
        let selfColumns = this.columnsCount(), b = this.B.columnsCount();

        if(selfRows == a && selfColumns == b) {
            return;
        }

        selfRows < a && this.addRow();
        selfRows > a && this.removeRow();
        selfColumns < b && this.addColumn();
        selfColumns > b && this.removeColumn();

        this.update();
    }
}

export { Matrix, Result };
