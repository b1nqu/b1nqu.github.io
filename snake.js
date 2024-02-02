const snakeBoard = document.getElementById("snakeBoard");
        const boardContext = snakeBoard.getContext("2d");

        let snake = [{ x: 200, y: 200 }];
        let snakeDirection = "right";
        let foodX;
        let foodY;

        placeFood();

        window.setInterval(moveSnake, 100);

        function placeFood() {
            foodX = Math.floor(Math.random() * snakeBoard.width / 10) * 10;
            foodY = Math.floor(Math.random() * snakeBoard.height / 10) * 10;
        }

        function moveSnake() {
            const head = { x: snake[0].x, y: snake[0].y };

            if (snakeDirection === "right") head.x += 10;
            else if (snakeDirection === "left") head.x -= 10;
            else if (snakeDirection === "up") head.y -= 10;
            else if (snakeDirection === "down") head.y += 10;

            snake.unshift(head);

            if (head.x === foodX && head.y === foodY) {
                placeFood();
            } else {
                snake.pop();
            }

            boardContext.clearRect(0, 0, snakeBoard.width, snakeBoard.height);

            boardContext.fillStyle = "lightgreen";
            snake.forEach(snakePart => boardContext.fillRect(snakePart.x, snakePart.y, 10, 10));

            boardContext.fillStyle = "red";
            boardContext.fillRect(foodX, foodY, 10, 10);
        }

        document.addEventListener("keydown", changeDirection);

        function changeDirection(event) {
            const LEFT_KEY = 37;
            const RIGHT_KEY = 39;
            const UP_KEY = 38;
            const DOWN_KEY = 40;

            if (event.keyCode === LEFT_KEY && snakeDirection !== "right") {
                snakeDirection = "left";
            } else if (event.keyCode === UP_KEY && snakeDirection !== "down") {
                snakeDirection = "up";
            } else if (event.keyCode === RIGHT_KEY && snakeDirection !== "left") {
                snakeDirection = "right";
            } else if (event.keyCode === DOWN_KEY && snakeDirection !== "up") {
                snakeDirection = "down";
            }
        }