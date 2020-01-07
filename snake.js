function Snake() {
  this.x = 0;
  this.y = 0;

  this.draw = function() {
    contextCanvas.fillStyle = "#FFA500";
    contextCanvas.fillRect(this.x, this.y, scale, scale);
  }
}