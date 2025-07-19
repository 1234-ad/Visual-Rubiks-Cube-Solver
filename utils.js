function getCubeSvg(state) {
    const faceColors = {
        'w': '#FFFFFF',
        'y': '#FFD500',
        'r': '#FF0000',
        'o': '#FF8000',
        'g': '#00FF00',
        'b': '#0000FF',
    };

    const facePositions = {
        U: { x: 3, y: 0 },
        L: { x: 0, y: 3 },
        F: { x: 3, y: 3 },
        R: { x: 6, y: 3 },
        B: { x: 9, y: 3 },
        D: { x: 3, y: 6 },
    };

    const size = 30;
    const svgSize = 12 * size;
    const svgParts = ['<svg width="' + svgSize + '" height="' + svgSize + '" xmlns="http://www.w3.org/2000/svg">'];
    const faces = ['U','L','F','R','B','D'];
    let index = 0;

    for (const face of faces) {
        const pos = facePositions[face];
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const color = faceColors[state[index++]] || '#000000';
                const x = (pos.x + col) * size;
                const y = (pos.y + row) * size;
                svgParts.push('<rect x="' + x + '" y="' + y + '" width="' + size + '" height="' + size + '" fill="' + color + '" stroke="#000"/>');
            }
        }
    }

    svgParts.push('</svg>');
    return svgParts.join('');
}