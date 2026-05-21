function knightMoves(start, end) {
    // movimientos posibles del caballo
    const moves = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
    ];

    // cola BFS
    const queue = [];

    // posiciones visitadas
    const visited = new Set();

    // agregar inicio
    queue.push([start, [start]]);

    // marcar visitado
    visited.add(start.toString());

    // mientras haya elementos
    while (queue.length > 0) {
        // sacar primero
        const [current, path] = queue.shift();

        const [x, y] = current;

        // si llegamos al final
        if (x === end[0] && y === end[1]) {
            console.log(`You made it in ${path.length - 1} moves!`);

            for (let step of path) {
                console.log(step);
            }

            return path;
        }

        // explorar movimientos
        for (let move of moves) {
            const newX = x + move[0];
            const newY = y + move[1];

            // verificar tablero
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                const nextMove = [newX, newY];

                // evitar repetidos
                if (!visited.has(nextMove.toString())) {
                    visited.add(nextMove.toString());

                    queue.push([nextMove, [...path, nextMove]]);
                }
            }
        }
    }
}

knightMoves([0, 0], [3, 3]);
