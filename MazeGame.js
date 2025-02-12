
const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");
const gridSize = 40;
const rows = canvas.width / gridSize;
const cols = canvas.height / gridSize;
let player = { x: 0, y: 0 };
let exit = { x: rows - 1, y: cols - 1 };

let maze = Array.from({ length: rows }, () => Array(cols).fill(1));

function generateMaze() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            maze[i][j] = Math.random() > 0.3 ? 0 : 1;
        }
    }
    maze[0][0] = 0;
    maze[rows - 1][cols - 1] = 0;
}

function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            ctx.fillStyle = maze[i][j] ? "black" : "white";
            ctx.fillRect(i * gridSize, j * gridSize, gridSize, gridSize);
        }
    }
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x * gridSize, player.y * gridSize, gridSize, gridSize);
    ctx.fillStyle = "red";
    ctx.fillRect(exit.x * gridSize, exit.y * gridSize, gridSize, gridSize);
}

function movePlayer(dx, dy) {
    let newX = player.x + dx;
    let newY = player.y + dy;
    if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && maze[newX][newY] === 0) {
        player.x = newX;
        player.y = newY;
        drawMaze();
        checkWin();
    }
}

function checkWin() {
    if (player.x === exit.x && player.y === exit.y) {
        document.getElementById("message").innerText = "You Escaped! 🎉";
        document.removeEventListener("keydown", keydownHandler);
    }
}

function keydownHandler(event) {
    switch (event.key) {
        case "ArrowUp": movePlayer(0, -1); break;
        case "ArrowDown": movePlayer(0, 1); break;
        case "ArrowLeft": movePlayer(-1, 0); break;
        case "ArrowRight": movePlayer(1, 0); break;
    }
}

document.addEventListener("keydown", keydownHandler);
generateMaze();
drawMaze();
