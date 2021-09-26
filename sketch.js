var wall1 , wall2 , wall3, wall4, wall5 , wall6 , wall7 ,wall8 , wall9 , wall10 ;
var wall11, wall12 ,wall13 ,wall14, wall15 , wall16 , wall17 , wall18 , wall19 , wall20 ;
var wall21 , wall22 , wall23 , wall24 , wall25 , wall26 , wall27 , wall28 , wall29 , wall30 ;
var wall31 , wall32 , wall33 , wall34 , wall35 , wall36 , wall37,wall38, wall39, wall40;
var wall41 ,wall42, wall43;
var pacman;
var ghost1,ghost2,ghost3,ghost4,ghost5,ghost6;

function setup(){
  createCanvas(1304,661);



  pacman = createSprite(652,330,30,30)
  pacman.shapeColor = "white"
  ghost1 = createSprite(480,300,30,30);
  ghost1.shapeColor = "white";
  ghost2 = createSprite(550,300,30,30);
  ghost2.shapeColor = "white";
  ghost3 = createSprite(500,250,30,30);
  ghost3.shapeColor = "white";
  ghost4 = createSprite(550,250,30,30);
  ghost4.shapeColor = "white";
  ghost5 = createSprite(450,250,30,30);
  ghost5.shapeColor = "white";
  ghost6 = createSprite(400,300,30,30);
  ghost6.shapeColor = "white";
  wall1 = createSprite(550, 650,661,3);
  wall1.shapeColor = "yellow";
  //wall1.setAnimation("wall");
  wall1.scale = 3;
  wall2 = createSprite(652,10,661,3);
  wall2.shapeColor = "yellow";
  //wall2.setAnimation("wall");
  wall2.scale = 3;
  wall3 = createSprite(10, 330,3,1304);
  wall3.shapeColor = "yellow";
  //wall3.setAnimation("wall");
  wall3.scale = 3;
  wall4 = createSprite(1296,330,3,1304);
  wall4.shapeColor = "yellow";
  //wall4.setAnimation("wall");
  wall4.scale = 3;
  wall5 = createSprite(735,100,1,200);
  wall5.shapeColor = "yellow";
  //wall5.setAnimation("wall");
  wall5.scale = 3;
  wall5.rotation = 90;
  wall6 = createSprite(966, 150,1,100);
  wall6.shapeColor = "yellow";
  //wall6.setAnimation("wall");
  wall6.scale = 3;
  wall6.rotation = 90;
  wall7 = createSprite(300,150,120,1);
  wall7.shapeColor = "yellow";
  //wall7.setAnimation("animation_1");
  wall7.scale = 3.4;
  wall8 = createSprite(1100,200,1,50);
  wall8.shapeColor = "yellow";
  //wall8.setAnimation("wall");
  wall8.scale = 2.7;
  wall8.rotation = 90;
  wall9 = createSprite(940, 80,50,1);
  wall9.shapeColor = "yellow";
  //wall9.setAnimation("wall");
  wall9.scale = 2.7;
  wall9.rotation = 90;
  wall10 = createSprite(300,77,1,47);
  wall10.shapeColor = "yellow";
  //wall10.setAnimation("wall");
  wall10.scale = 3;
  wall11 = createSprite(200,79,1,90);
  wall11.shapeColor = "yellow";
  //wall11.setAnimation("wall");
  wall11.scale = 2.5;
  wall11.rotation = 90;
  wall12 = createSprite(1093,197,1,30);
  wall12 .shapeColor = "yellow";
  //wall12.setAnimation("wall");
  wall12.scale = 3;
  wall13 = createSprite(1090,247,80,1);
  wall13.shapeColor = "yellow";
  //wall13.setAnimation("wall");
  wall13.scale = 3;
  wall14 = createSprite(970,315,30,1);
  wall14.shapeColor = "yellow";
  //wall14.setAnimation("animation_2");
  wall14.scale = 4.5;
  wall14.rotation = 90;
  wall15 = createSprite(1050,330,1,40);
  wall15.shapeColor = "yellow";
  //wall15.setAnimation("wall");
  wall15.scale = 4;
  wall15.rotation = 90;
  wall16 = createSprite(1000, 440,70,1);
  wall16.shapeColor = "yellow";
  //wall16.setAnimation("animation_2");
  wall16.scale = 3;
  wall17 = createSprite(895, 340,50,1);
  wall17.shapeColor = "yellow";
//  wall17.setAnimation("wall");
  wall17.scale = 4;
  wall17.rotation = 90;
  wall18 = createSprite(725, 567,200,1);
  wall18.shapeColor = "yellow";
  //wall18.setAnimation("animation_2");
  wall18.scale = 3;
  wall19 = createSprite(1150, 570,1,30);
  wall19.shapeColor = "yellow";
  //wall19.setAnimation("wall");
  wall19.scale = 3;
  wall20 = createSprite(1237, 510,1,40);
  wall20.shapeColor = "yellow";
  //wall20.setAnimation("wall");
  wall20.scale = 2.5;
  wall20.rotation = 90;
  wall21 = createSprite(863, 510,1,40);
  wall21.shapeColor = "yellow";
  //wall21.setAnimation("wall");
  wall21.scale = 3;
  wall21.rotation = 90;
  //htygb::::::::::::::::::::
  wall22 = createSprite(922, 510,10,1);
  wall22.shapeColor = "yellow";
  //wall22.setAnimation("wall");
  wall22.scale = 3;
  wall22.rotation = 90;
  wall23 = createSprite(500, 230,1,80);
  wall23.shapeColor = "white";
//  wall23.setAnimation("wall");
  wall23.scale = 3;
  wall23.rotation = 90;
  wall24 = createSprite(620, 275,1,30);
  wall24.shapeColor = "white";
  //wall24.setAnimation("wall");
  wall24.scale = 3;
  wall25 = createSprite(380, 275,1,30);
  wall25.shapeColor = "white";
//  wall25.setAnimation("wall");
  wall25.scale = 3;
  wall26 = createSprite(500,320,1,60);
  wall26.shapeColor = "white";
  //wall26.setAnimation("animation_2");
  wall26.scale = 4;
  wall26.rotation = 90;
  wall27 = createSprite(1150, 75,50,1);
  wall27.shapeColor = "yellow";
//  wall27.setAnimation("wall");
  wall27.scale = 3;
  wall28 = createSprite(755, 355,1,60);
  wall28.shapeColor = "yellow";
  //wall28.setAnimation("wall");
  wall28.scale = 3;
  wall29 = createSprite(690, 355,1,103);
  wall29.shapeColor = "yellow";
  //wall29.setAnimation("animation_2");
  wall29.scale = 4;
  wall29.rotation = 90;
  wall30 = createSprite(790, 275,50,1);
  wall30.shapeColor = "yellow";
  //wall30.setAnimation("wall");
  wall30.scale = 3;
  wall31 = createSprite(640, 523,1,70);
  wall31.shapeColor = "yellow";
  //wall31.setAnimation("wall");
  wall31.scale = 3;
  wall32 = createSprite(350,575,1,80);
  wall32.shapeColor = "yellow";
  //wall32.setAnimation("wall");
  wall32.scale = 3;
  wall33 = createSprite(300, 543,60,1);
  wall33.shapeColor = "yellow";
  //wall33.setAnimation("wall");
  wall33.scale = 3;
  wall34 = createSprite(770,200,1,20);
  wall34.shapeColor = "yellow";
  //wall34.setAnimation("wall");
  wall34.scale = 3.7;
  wall34.rotation = 90;
  wall35 = createSprite(705, 165,1,15);
  wall35.shapeColor = "yellow";
  //wall35.setAnimation("wall");
  wall35.scale = 3.7;
  wall35.rotation = 90;
  wall36 = createSprite(734, 181,1,10);
  wall36.shapeColor = "yellow";
  //wall36.setAnimation("animation_1");
  wall36.scale = 3.4;
  wall37 = createSprite(195,355,1,107);
  wall37.shapeColor = "yellow";
 // wall37.setAnimation("animation_2");
  wall37.scale = 2.5;
  wall37.rotation = 90;
  wall38 = createSprite(105, 457,150,1);
  wall38.shapeColor = "yellow";
  //wall38.setAnimation("animation_2");
  wall38.scale = 2.5;
  wall38.rotation = 90;
  wall39 = createSprite(265, 379,70,1);
  wall39.shapeColor = "yellow";
  //wall39.setAnimation("wall");
  wall39.scale = 2.5;
  wall39.rotation = 90;
  wall40 = createSprite(385, 92,1,15);
  wall40.shapeColor = "yellow";
  //wall40.setAnimation("animation_2");
  wall40.scale = 3.5;
  wall41 = createSprite(1200,200,1,50);
  wall41.shapeColor = "yellow";
  //wall41.setAnimation("animation_2");
  wall41.scale = 3.8;
  wall42 = createSprite(545, 470,1,40);
  wall42.shapeColor = "yellow";
  //wall42.setAnimation("wall");
  wall42.scale = 2.5;
  wall42.rotation = 90;
  wall43 = createSprite(545,520,37,1);
  wall43.shapeColor = "yellow";
  //wall43.setAnimation("wall");
  wall43.scale = 2.5;
  wall43.rotation = 90;
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  wall44 = createSprite(1190,425,30,1);
  wall44.shapeColor = "yellow";
  //wall44.setAnimation("wall");
  wall44.scale = 2.5;
  wall44.rotation = 90;

}

function draw(){
background("black");
if(keyDown("D")){
  pacman.velocityX = 5;
  pacman.velocityY = 0;
}
if(keyDown("A")){
  pacman.velocityX =-5;
  pacman.velocityY = 0;
}
if(keyDown("S")){
  pacman.velocityX = 0;
  pacman.velocityY = 5;
}
if(keyDown("W")){
  pacman.velocityX = 0;
  pacman.velocityY =-5;
}

ghost1.velocityX = 1;
ghost1.velocityX =-1;
ghost1.velocityY = 1;
ghost1.velocityY =-1;
ghost2.velocityX = 1;
ghost2.velocityX =-1;
ghost2.velocityY =-1;
ghost2.velocityY = 1;
ghost3.velocityX = 1;
ghost3.velocityX =-1;
ghost3.velocityY = 1;
ghost3.velocityY =-1; 
ghost4.velocityX = 1;
ghost4.velocityX =-1;
ghost4.velocityY = 1;
ghost4.velocityY =-1;
ghost5.velocityX = 1;
ghost5.velocityX =-1;
ghost5.velocityY = 1;
ghost5.velocityY =-1;
ghost6,velocityX = 1;
ghost6.velocityX =-1;
ghost6.velocityY = 1;
ghost6.velocityY =-1;





ghost1.bounceOff(wall1);
ghost1.bounceOff(wall2);
ghost1.bounceOff(wall3);
ghost1.bounceOff(wall4);
ghost1.bounceOff(wall5);
ghost1.bounceOff(wall6);
ghost1.bounceOff(wall7);
ghost1.bounceOff(wall8);
ghost1.bounceOff(wall9);
ghost1.bounceOff(wall10);
ghost1.bounceOff(wall11);
ghost1.bounceOff(wall12);
ghost1.bounceOff(wall13);
ghost1.bounceOff(wall14);
ghost1.bounceOff(wall15);
ghost1.bounceOff(wall16);
ghost1.bounceOff(wall17);
ghost1.bounceOff(wall18);
ghost1.bounceOff(wall19);
ghost1.bounceOff(wall20);
ghost1.bounceOff(wall21);
ghost1.bounceOff(wall22);
ghost1.bounceOff(wall23);
ghost1.bounceOff(wall24);
ghost1.bounceOff(wall25);
ghost1.bounceOff(wall26);
ghost1.bounceOff(wall27);
ghost1.bounceOff(wall28);
ghost1.bounceOff(wall29);
ghost1.bounceOff(wall30);
ghost1.bounceOff(wall31);
ghost1.bounceOff(wall32);
ghost1.bounceOff(wall33);
ghost1.bounceOff(wall34);
ghost1.bounceOff(wall35);
ghost1.bounceOff(wall36);
ghost1.bounceOff(wall37);
ghost1.bounceOff(wall38);
ghost1.bounceOff(wall39);
ghost1.bounceOff(wall40);
ghost1.bounceOff(wall41);
ghost1.bounceOff(wall42);
ghost1.bounceOff(wall43);
ghost1.bounceOff(wall44);





ghost2.bounceOff(wall1);
ghost2.bounceOff(wall2);
ghost2.bounceOff(wall3);
ghost2.bounceOff(wall4);
ghost2.bounceOff(wall5);
ghost2.bounceOff(wall6);
ghost2.bounceOff(wall7);
ghost2.bounceOff(wall8);
ghost2.bounceOff(wall9);
ghost2.bounceOff(wall10);
ghost2.bounceOff(wall11);
ghost2.bounceOff(wall12);
ghost2.bounceOff(wall13);
ghost2.bounceOff(wall14);
ghost2.bounceOff(wall15);
ghost2.bounceOff(wall16);
ghost2.bounceOff(wall17);
ghost2.bounceOff(wall18);
ghost2.bounceOff(wall19);
ghost2.bounceOff(wall20);
ghost2.bounceOff(wall21);
ghost2.bounceOff(wall22);
ghost2.bounceOff(wall23);
ghost2.bounceOff(wall24);
ghost2.bounceOff(wall25);
ghost2.bounceOff(wall26);
ghost2.bounceOff(wall27);
ghost2.bounceOff(wall28);
ghost2.bounceOff(wall29);
ghost2.bounceOff(wall30);
ghost2.bounceOff(wall31);
ghost2.bounceOff(wall32);
ghost2.bounceOff(wall33);
ghost2.bounceOff(wall34);
ghost2.bounceOff(wall35);
ghost2.bounceOff(wall36);
ghost2.bounceOff(wall37);
ghost2.bounceOff(wall38);
ghost2.bounceOff(wall39);
ghost2.bounceOff(wall40);
ghost2.bounceOff(wall41);
ghost2.bounceOff(wall42);
ghost2.bounceOff(wall43);
ghost2.bounceOff(wall44);






ghost3.bounceOff(wall1);
ghost3.bounceOff(wall2);
ghost3.bounceOff(wall3);
ghost3.bounceOff(wall4);
ghost3.bounceOff(wall5);
ghost3.bounceOff(wall6);
ghost3.bounceOff(wall7);
ghost3.bounceOff(wall8);
ghost3.bounceOff(wall9);
ghost3.bounceOff(wall10);
ghost3.bounceOff(wall11);
ghost3.bounceOff(wall12);
ghost3.bounceOff(wall13);
ghost3.bounceOff(wall14);
ghost3.bounceOff(wall15);
ghost3.bounceOff(wall16);
ghost3.bounceOff(wall17);
ghost3.bounceOff(wall18);
ghost3.bounceOff(wall19);
ghost3.bounceOff(wall20);
ghost3.bounceOff(wall21);
ghost3.bounceOff(wall22);
ghost3.bounceOff(wall23);
ghost3.bounceOff(wall24);
ghost3.bounceOff(wall25);
ghost3.bounceOff(wall26);
ghost3.bounceOff(wall27);
ghost3.bounceOff(wall28);
ghost3.bounceOff(wall29);
ghost3.bounceOff(wall30);
ghost3.bounceOff(wall31);
ghost3.bounceOff(wall32);
ghost3.bounceOff(wall33);
ghost3.bounceOff(wall34);
ghost3.bounceOff(wall35);
ghost3.bounceOff(wall36);
ghost3.bounceOff(wall37);
ghost3.bounceOff(wall38);
ghost3.bounceOff(wall39);
ghost3.bounceOff(wall40);
ghost3.bounceOff(wall41);
ghost3.bounceOff(wall42);
ghost3.bounceOff(wall43);
ghost3.bounceOff(wall44);







ghost4.bounceOff(wall1);
ghost4.bounceOff(wall2);
ghost4.bounceOff(wall3);
ghost4.bounceOff(wall4);
ghost4.bounceOff(wall5);
ghost4.bounceOff(wall6);
ghost4.bounceOff(wall7);
ghost4.bounceOff(wall8);
ghost4.bounceOff(wall9);
ghost4.bounceOff(wall10);
ghost4.bounceOff(wall11);
ghost4.bounceOff(wall12);
ghost4.bounceOff(wall13);
ghost4.bounceOff(wall14);
ghost4.bounceOff(wall15);
ghost4.bounceOff(wall16);
ghost4.bounceOff(wall17);
ghost4.bounceOff(wall18);
ghost4.bounceOff(wall19);
ghost4.bounceOff(wall20);
ghost4.bounceOff(wall21);
ghost4.bounceOff(wall22);
ghost4.bounceOff(wall23);
ghost4.bounceOff(wall24);
ghost4.bounceOff(wall25);
ghost4.bounceOff(wall26);
ghost4.bounceOff(wall27);
ghost4.bounceOff(wall28);
ghost4.bounceOff(wall29);
ghost4.bounceOff(wall30);
ghost4.bounceOff(wall31);
ghost4.bounceOff(wall32);
ghost4.bounceOff(wall33);
ghost4.bounceOff(wall34);
ghost4.bounceOff(wall35);
ghost4.bounceOff(wall36);
ghost4.bounceOff(wall38);
ghost4.bounceOff(wall39);
ghost4.bounceOff(wall41);
ghost4.bounceOff(wall42);
ghost4.bounceOff(wall43);
ghost4.bounceOff(wall44);







ghost5.bounceOff(wall1);
ghost5.bounceOff(wall2);
ghost5.bounceOff(wall3);
ghost5.bounceOff(wall4);
ghost5.bounceOff(wall5);
ghost5.bounceOff(wall6);
ghost5.bounceOff(wall7);
ghost5.bounceOff(wall9);
ghost5.bounceOff(wall10);
ghost5.bounceOff(wall11);
ghost5.bounceOff(wall12);
ghost5.bounceOff(wall13);
ghost5.bounceOff(wall14);
ghost5.bounceOff(wall15);
ghost5.bounceOff(wall16);
ghost5.bounceOff(wall17);
ghost5.bounceOff(wall18);
ghost5.bounceOff(wall19);
ghost5.bounceOff(wall20);
ghost5.bounceOff(wall22);
ghost5.bounceOff(wall23);
ghost5.bounceOff(wall24);
ghost5.bounceOff(wall25);
ghost5.bounceOff(wall26);
ghost5.bounceOff(wall27);
ghost5.bounceOff(wall28);
ghost5.bounceOff(wall29);
ghost5.bounceOff(wall30);
ghost5.bounceOff(wall31);
ghost5.bounceOff(wall32);
ghost5.bounceOff(wall33);
ghost5.bounceOff(wall34);
ghost5.bounceOff(wall35);
ghost5.bounceOff(wall36);
ghost5.bounceOff(wall37);
ghost5.bounceOff(wall38);
ghost5.bounceOff(wall39);
ghost5.bounceOff(wall40);
ghost5.bounceOff(wall41);
ghost5.bounceOff(wall42);
ghost5.bounceOff(wall43);
ghost5.bounceOff(wall44);







ghost6.bounceOff(wall1);
ghost6.bounceOff(wall2);
ghost6.bounceOff(wall3);
ghost6.bounceOff(wall4);
ghost6.bounceOff(wall5);
ghost6.bounceOff(wall6);
ghost6.bounceOff(wall7);
ghost6.bounceOff(wall8);
ghost6.bounceOff(wall9);
ghost6.bounceOff(wall10);
ghost6.bounceOff(wall11);
ghost6.bounceOff(wall12);
ghost6.bounceOff(wall13);
ghost6.bounceOff(wall14);
ghost6.bounceOff(wall16);
ghost6.bounceOff(wall17);
ghost6.bounceOff(wall18);
ghost6.bounceOff(wall19);
ghost6.bounceOff(wall20);
ghost6.bounceOff(wall21);
ghost6.bounceOff(wall22);
ghost6.bounceOff(wall23);
ghost6.bounceOff(wall24);
ghost6.bounceOff(wall25);
ghost6.bounceOff(wall26);
ghost6.bounceOff(wall27);
ghost6.bounceOff(wall28);
ghost6.bounceOff(wall29);
ghost6.bounceOff(wall30);
ghost6.bounceOff(wall31);
ghost6.bounceOff(wall32);
ghost6.bounceOff(wall33);
ghost6.bounceOff(wall34);
ghost6.bounceOff(wall35);
ghost6.bounceOff(wall36);
ghost6.bounceOff(wall37);
ghost6.bounceOff(wall38);
ghost6.bounceOff(wall39);
ghost6.bounceOff(wall40);
ghost6.bounceOff(wall41);
ghost6.bounceOff(wall42);
ghost6.bounceOff(wall43);
ghost6.bounceOff(wall44);






pacman.bounceOff(wall1);
pacman.bounceOff(wall2);
pacman.bounceOff(wall3);
pacman.bounceOff(wall4);
pacman.bounceOff(wall5);
pacman.bounceOff(wall6);
pacman.bounceOff(wall7);
pacman.bounceOff(wall8);
pacman.bounceOff(wall9);
pacman.bounceOff(wall10);
pacman.bounceOff(wall11);
pacman.bounceOff(wall12);
pacman.bounceOff(wall13);
pacman.bounceOff(wall14);
pacman.bounceOff(wall15);
pacman.bounceOff(wall16);
pacman.bounceOff(wall17);
pacman.bounceOff(wall18);
pacman.bounceOff(wall19);
pacman.bounceOff(wall20);
pacman.bounceOff(wall21);
pacman.bounceOff(wall22);
pacman.bounceOff(wall23);
pacman.bounceOff(wall24);
pacman.bounceOff(wall25);
pacman.bounceOff(wall26);
pacman.bounceOff(wall27);
pacman.bounceOff(wall28);
pacman.bounceOff(wall29);
pacman.bounceOff(wall30);
pacman.bounceOff(wall31);
pacman.bounceOff(wall32);
pacman.bounceOff(wall33);
pacman.bounceOff(wall34);
pacman.bounceOff(wall35);
pacman.bounceOff(wall36);
pacman.bounceOff(wall37);
pacman.bounceOff(wall38);
pacman.bounceOff(wall39);
pacman.bounceOff(wall40);
pacman.bounceOff(wall41);
pacman.bounceOff(wall42);
pacman.bounceOff(wall43);
pacman.bounceOff(wall44);
drawSprites();
}

