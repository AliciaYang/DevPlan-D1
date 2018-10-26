var Snake = function (ele, score, speed, x, y) {

    this.cellWidth = 10;
    this.ele = document.getElementById(ele);
    this.cxt = this.ele.getContent("2d");
    this.x = x;
    this.y = y;
    this.score = document.getElementById(score);
    this.speed = document.getElementById(speed);

    this.ele.width = this.cellWidth * this.x;
    this.ele.height = this.cellWidth * this.y;
    this.ele.style.border = "1px solid #000";

    this.changeDirection();
};

Snake.prototype = {
    
    init: function () {
        this.direction = 1; //1-right 2-down 3-left 4-up
        this.nextDirection = '';
        this.snakeArr = [[0, parseInt(this.y/2)], [1, parseInt(this.y/2)]];
        this.speed = 1;
        this.score = 0;
    },
    getCellArea: function (pos) {
        return [(pos[0]-1)*this.cellWidth+1,(pos[1]-1)*this.cellWidth+1];
    },
    setTimer: function () {
        
    },
    moveSnake: function () {
        //move snake
        this.direction = this.nextDirection == ''?this.direction:this.nextDirection;
        var dir = this.direction;
        var snakeArray = this.snakeArr;
        var snakeHead = snakeArray[snakeArray.length - 1];
        switch (dir) {
            case 1 ://right
                snakeHead = [snakeHead[0]+1,snakeHead[1]];
                break;
            case 2 ://down
                snakeHead = [snakeHead[0],snakeHead[1]+1];
                break;
            case 3 ://left
                snakeHead = [snakeHead[0]-1,snakeHead[1]];
                break;
            case 4 ://up
                snakeHead = [snakeHead[0],snakeHead[1]-1];
                break;
        }
        //hit wall or itself then reset
    }
}