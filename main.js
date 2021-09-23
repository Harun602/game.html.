// var canvas = document.querySelector('canvas');
// var c = canvas.getContext('2d');


//     canvas.width = window.innerWidth;
//     canvas.height =window.innerHeight;


//     var x = 100;
//     var y = 100;
//     var width = 50;
//     var height = 50;

//     function moveR(){
//         x++;
//         c.fillStyle = 'blue';
//         c.fillRect(x,y, width,height);
//     }


//     function animate(){
//         c.clearRect(0,0, canvas.width, canvas.height);
//         moveR();
//         requestAnimationFrame(animate);
//     }
//     animate();

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');


canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

function box(x,y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = 50;
    this.height = 50;
    this.moveR = () =>{
        this.x++;
        c.fillStyle = this.color;
        c.fillRect(this.x,this.y, this.width, this.height);
    }
}

var player = new box(100,100, 'blue');
var enyme = new box(150,150, 'red');
var harun = new box(200,200, 'green');
var yellow = new box(250,250, 'yellow');
var Brown = new box(300,300, 'Brown');
var pink = new box(350,350, 'pink');
var black = new box(400,450, 'black');
function animate(){
    c.clearRect(0,0, canvas.width, canvas.height);
    player.moveR();
    enyme.moveR();
    harun.moveR();
    yellow.moveR();
    Brown.moveR();
    pink.moveR();
    black.moveR();
    requestAnimationFrame(animate);
}
animate()