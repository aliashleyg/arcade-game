// Enemies our player must avoid
var Enemy = function(latitude, src, speedInterval) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    
    //TODOS:

    //1. set a width and height that is allowable for the bug to move in (three defined rows)
    //2. set a random speed for each bug, but make sure that they are all in separate rows. 
    this.speed = Math.round(Math.random() * speedInterval) + 500;
    this.x;
    this.y = latitude; //function here to set math.random speed;
    this.sprite = src;
};

var enemyOne = new Enemy(60,'images/shark.png', (600 - 500));
var enemyTwo = new Enemy(142, 'images/narwhal.png', (650 - 500));
var enemyThree = new Enemy(224, 'images/anglerfish.png', (625 - 500));


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (this.x < 600) {
        this.x = this.x + this.speed *dt;

    } else {
        this.x = -120;
    }   

    if (player.x < this.x + 50 &&
        player.x + 50 > this.x &&
        player.y < this.y + 65 &&
        player.y + 50 > this.y) {
        player.x = 0;
        player.y = 450;
        tallyScore();
    }
};

let score = 0;
function tallyScore(){
    if (score < 2) {
        console.log ('keep playing');
        score ++;
    } else {
        console.log('end game?');
    }
}

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/girl.png';
    this.x = 0;
    this.y = 450;
};

Player.prototype.update = function(dt) {
    /*FOR MY VERSION*/
    if(this.x > 380 && this.y < 60) {
        this.x = 0;
        this.y = 405;
    }
    /*FOR BUG VERSION */
    // if (this.y < 60) {
    //     this.x = 0;
    //     this.y = 405;
    // }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [enemyOne, enemyTwo, enemyThree];
let player = new Player;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

Player.prototype.handleInput = function(key) {
    if (key == 'left' && this.x > 0) {
        this.x = this.x - 100;
    } 

    if (key == 'right' && this.x < 400) {
        this.x = this.x + 100;
    }

    if (key == 'up' && this.y > 60) {
        this.y = this.y - 100;
    }

    if (key == 'down' && this.y < 405) {
        this.y = this.y + 100;
    }
   
}
