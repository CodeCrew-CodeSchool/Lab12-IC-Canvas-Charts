let canvas = document.getElementById('canvas') // canvas element

if(canvas.getContext){
    // if true
    const ctx = canvas.getContext('2d'); // we can use this var, to draw whatever we want!
    
    // // Draw a rectangle

    //  ctx.fillStyle = 'green'; // I want whatever I draw to be green 
    //  ctx.fillRect(10, 10, 150, 100); // I want a green rectangle 

    // ctx.beginPath(); // starts to put the pen to the paper
    // ctx.rect(20, 20, 150, 100); // I want to draw a rectangle
    // ctx.stroke(); // draw the dang rectangle - implements the rectangle

    // ctx.font = "30px Arial"; // font-size and font-family 
    // ctx.fillText("Hey 201 peeps", 30, 80); // What we want to write, x coor, y coor
}

