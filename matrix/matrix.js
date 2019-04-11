
export class Matrix {
    constructor(txt) {
        this.rows = txt.split("\n").map(r => r.split(" ").map(x => parseInt(x)));
        this.columns = [];
        for (let i = 0; i < this.rows[0].length; i++) {
            this.columns[i] = Array.from(this.rows, r => r[i]);
        }
    }
}