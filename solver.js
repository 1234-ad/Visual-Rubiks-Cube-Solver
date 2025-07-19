function start() {
    const cube = new Cube();
    cube.scramble();
    const steps = solveCube(cube);
    const container = document.getElementById('visualization');
    container.innerHTML = '';

    for (let i = 0; i < steps.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `<p>Step ${i + 1}: ${steps[i].move}</p>` + getCubeSvg(steps[i].state);
        container.appendChild(div);
    }
}

function solveCube(cube) {
    const steps = [];
    const temp = cube.clone();
    const moves = ['U', 'D', 'F', 'B', 'L', 'R'];

    for (let i = 0; i < 6; i++) {
        const move = moves[i];
        temp.rotate(move);
        steps.push({ move: move, state: temp.toColorString() });
        temp.rotate(move, true);  // undo to keep next step visible
    }

    return steps;
}