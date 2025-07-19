class Cube {
    constructor() {
        this.faces = {
            U: Array(9).fill('w'),
            D: Array(9).fill('y'),
            F: Array(9).fill('g'),
            B: Array(9).fill('b'),
            L: Array(9).fill('o'),
            R: Array(9).fill('r'),
        };
    }

    clone() {
        const newCube = new Cube();
        for (let face in this.faces) {
            newCube.faces[face] = [...this.faces[face]];
        }
        return newCube;
    }

    rotate(face, prime = false) {
        const faceTurns = {
            U: [['F', 0, 1, 2], ['R', 0, 1, 2], ['B', 0, 1, 2], ['L', 0, 1, 2]],
            D: [['F', 6, 7, 8], ['L', 6, 7, 8], ['B', 6, 7, 8], ['R', 6, 7, 8]],
            F: [['U', 6, 7, 8], ['R', 0, 3, 6], ['D', 2, 1, 0], ['L', 8, 5, 2]],
            B: [['U', 2, 1, 0], ['L', 0, 3, 6], ['D', 6, 7, 8], ['R', 8, 5, 2]],
            L: [['U', 0, 3, 6], ['F', 0, 3, 6], ['D', 0, 3, 6], ['B', 8, 5, 2]],
            R: [['U', 8, 5, 2], ['B', 0, 3, 6], ['D', 8, 5, 2], ['F', 8, 5, 2]],
        };

        const cycle = faceTurns[face];
        const temp = cycle.map(([f, ...idx]) => idx.map(i => this.faces[f][i]));
        if (prime) temp.unshift(temp.pop());
        else temp.push(temp.shift());
        for (let i = 0; i < cycle.length; i++) {
            const [f, ...idx] = cycle[i];
            idx.forEach((j, k) => this.faces[f][j] = temp[i][k]);
        }
    }

    scramble(moves = 10) {
        const faces = ['U','D','F','B','L','R'];
        for (let i = 0; i < moves; i++) {
            const face = faces[Math.floor(Math.random() * 6)];
            const prime = Math.random() > 0.5;
            this.rotate(face, prime);
        }
    }

    toColorString() {
        return ['U','L','F','R','B','D'].map(f => this.faces[f].join('')).join('');
    }
}

window.Cube = Cube;