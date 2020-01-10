const canvas = document.querySelector(".canvas");
const contextCanvas = canvas.getContext("2d");
const scale = 10;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup() {
  snake = new Snake();
  fruit = new Fruit();
  fruit.pickLocation();
  
  window.setInterval(() => {
    contextCanvas.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();
  }, 250)
}());

window.addEventListener("keydown", ((e) => {
  const direction = e.key.replace("Arrow", "");
  snake.changeDirection(direction);
}) )