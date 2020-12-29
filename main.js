var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

body_part_img_width=30;
body_part_img_height=30;

var player_object="";
var body_part_img_object="";

function player_update(){
    fabric.Img.fromURL("player.png", function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
fabric.Image.fromURL(get_image, function(Img){
    body_part_img_object=Img;

    body_part_img_object.scaleToWidth(body_part_img_width);
    body_part_img_width.scaleToHeight(body_part_img_height);
    body_part_img_height.set({
        top:body_part_img_y,
        left:body_part_img_x
    });
    canvas.add(body_part_img_object);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey==true && keyPressed=='80'){
    console.log("p and shift pressed together");
    block_img_width=body_part_img_width+10;
    block_img_height=body_part_img_height+10;
    document.getElementById("current_width").innerHTML=body_part_img_width;
    document.getElementById("current_height").innerHTML=body_part_img_height;
}

if(e.shiftKey==true && keyPressed=='77'){
console.log("m and shift pressed together");
body_part_img_width=body_part_img_width-10;
body_part_img_height=body_part_img_height-10;
document.getElementById("current_width").innerHTML=body_part_img_width;
document.getElementById("current_height").innerHTML=body_part_img_height;
}

if(keyPressed=='38'){
    up();
    console.log("up");
}

if(keyPressed=='40'){
    down();
    console.log("down");
}

if(keyPressed=='37'){
    left();
    console.log("left");
}

if(keyPressed=='39'){
    right();
    console.log("right");
}

if(keyPressed=='70'){
    new_image('ironman-face.png');
    console.log("f");
}

if(keyPressed=='66'){
    new_image('hulkd_body.png');
    console.log("b");
}

if(keyPressed=='76'){
    new_image('captain_america_left_hand.png');
    console.log("l");
}

if(keyPressed=='82'){
    new_image('thor_right_hand.png');
    console.log("r");
}

if(keyPressed=='87'){
    new_image('spiderman_legs.png');
    console.log("w");
}
}


function up(){
    if(player_y >=0){
        player_y = player_y - block_img_height;
        console.log("block img height =" + block_img_height);
        console.log("when up arrow is pressed x =" + player_x + ", y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
    }
    
    function down(){
        if(player_y <=500){
            player_y = player_y + block_img_height;
            console.log("block img height =" + block_img_height);
            console.log("when down arrow is pressed x =" + player_x + ", y =" + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    
    function left(){
        if(player_x >=0){
            player_x = player_x + block_img_width;
            console.log("block img width =" + block_img_width);
            console.log("when left arrow is pressed x =" + player_x + ", y =" + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    
    function right(){
        if(player_x <=850){
            player_x = player_x + block_img_width;
            console.log("block img width =" + block_img_width);
            console.log("when right arrow is pressed x =" + player_x + ", y =" + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }