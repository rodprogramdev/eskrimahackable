        //68 D
        //87 W
        //65 A
        //83 S
        //70 F
        //16


        var moveleft = 400;
        var moveUp = 400;
        var charLife = 3;

        const hero = {
            top: 400,
            left: 400,
            height: 230,
            width: 145
        }
        const snake = {
            top: 400,
            left: 400,
            height: 230,
            width: 145
        }

        function animateAll(e) {



            if (e.keyCode == 87) {
                if (moveUp > 380) {
                    moveUp -= 20;
                    mainCharacter.style.top = moveUp + 'px';
                    mainCharacter.style.backgroundImage = "url('../images/moveUp3.png')";
                }// end of boundary moving up

            }//end of moveUp

            if (e.keyCode == 83) {
                if (moveUp < 480) { //440
                    moveUp += 20;
                    mainCharacter.style.top = moveUp + 'px';
                    mainCharacter.style.backgroundImage = "url('../images/moveDown2.png')";
                }// end of boundary moving down
            }//end of moveDown


            if (e.keyCode == 68) { //3710
                if (moveleft < 3650) {
                    moveleft += 50;
                    mainCharacter.style.left = moveleft + 'px';
                    mainCharacter.style.backgroundImage = "url('../images/x3rima2.png')";
                   
                }  // end if statement of boundary moving right
            }//end of moveforward

            if (e.keyCode == 70) {
                if (moveleft < 3650) {
                    moveleft += 100;
                    mainCharacter.style.left = moveleft + 'px';
                    mainCharacter.style.backgroundImage = "url('../images/duckDash.png')";
                    // dash();
                }
            }//end of duckDASH FORWARD

            if (e.keyCode == 65) {
                if (moveleft > 0) {
                    moveleft -= 100;
                    mainCharacter.style.left = moveleft + 'px';
                    mainCharacter.style.backgroundImage = "url('../images/backward.png')";
                }//end of boundary moving left

            }//end of move backward
            // if (e.keyCode == 70) {
            //     moveUp -= 200;
            //     mainCharacter.style.top = moveUp + 'px';
            //     mainCharacter.style.backgroundImage = "url('../images/x3rima1.png')";
            // }//Jump character


            if (e.keyCode == 16) {
                moveleft += 100;
                mainCharacter.style.left = moveleft + 'px';
                mainCharacter.style.backgroundImage = "url('../images/x3rima3.png')";
            }//end of sweep


            if (e.keyCode == 81) {
                if (moveleft < 3650) {
                    moveleft += 5;
                    mainCharacter.style.left = moveleft + 'px';
                    mainCharacter.style.backgroundImage = "url('../images/kick3.png')";
                }
            }//end of attack

            // attackButton(event);
            gameOver();
            changeCostume();

        }//end of function animateAll




        // function attackButton(event) {

        //     if (event.keyCode == 69) {
        //         moveleft += 5;
        //         mainCharacter.style.left = moveleft + 'px';
        //         mainCharacter.style.backgroundImage = "url('../images/attack.png')";
        //         attackCollision();
        //     }//end of attack 
        //     // else (event.keyCode){
        //     //     mainCharacter.onkeyup = gameOverCollision();
        //     // }
        // }//end of Function attackButton

        function attackCollision() {
            var firstCollision = setInterval(function () {
                // let hasjustCollided = false;
                var char = document.getElementById("mainCharacter");
                var enLeft = document.getElementById("enemy");
                var en2Left = document.getElementById("enemy2");
                var goon1Bullet = document.getElementById("goon1Bullet");


                var charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
                var charLeft = parseInt(window.getComputedStyle(char).getPropertyValue("left"));
                var charWidth = parseInt(window.getComputedStyle(char).getPropertyValue("width"));
                var charHeight = parseInt(window.getComputedStyle(char).getPropertyValue("height"));
               
                var enemyLeft = parseInt(window.getComputedStyle(enLeft).getPropertyValue("left"));
                var enemyWidth = parseInt(window.getComputedStyle(enLeft).getPropertyValue("width"));
                var enemyTop = parseInt(window.getComputedStyle(enLeft).getPropertyValue("top"));
                var enemyHeight = parseInt(window.getComputedStyle(enLeft).getPropertyValue("height"));


                var enemy2Left = parseInt(window.getComputedStyle(en2Left).getPropertyValue("left"));
                var enemy2Width = parseInt(window.getComputedStyle(en2Left).getPropertyValue("width"));
                var enemy2Top = parseInt(window.getComputedStyle(en2Left).getPropertyValue("top"));
                var enemy2Height = parseInt(window.getComputedStyle(en2Left).getPropertyValue("height"));
                var enemy2Left = parseInt(window.getComputedStyle(en2Left).getPropertyValue("left"));

                var goon1BulletLeft = parseInt(window.getComputedStyle(goon1Bullet).getPropertyValue("left"));
                var goon1BulletWidth = parseInt(window.getComputedStyle(goon1Bullet).getPropertyValue("width"));
                var goon1BulletTop = parseInt(window.getComputedStyle(goon1Bullet).getPropertyValue("top"));
                var goon1BulletHeight = parseInt(window.getComputedStyle(goon1Bullet).getPropertyValue("height"));
                var goon1BulletLeft = parseInt(window.getComputedStyle(goon1Bullet).getPropertyValue("left"));

                
                if (charLeft < enemyLeft + enemyWidth &&
                    charLeft + charWidth > enemyLeft &&
                    charTop < enemyTop + enemyHeight &&
                    charTop + charHeight > enemyTop
                ) {
                    enemy.style.display = "none";
                    // enemy.style.visibility ="hidden";
                }
                else{
                   
                //    // document.onkeyup = animateAll;
                    enemy.style.display="inline";       
                 }

                // if (enemyLeft < charLeft + 100 &&
                //     enemyLeft > 0  &&
                //      charTop >= hero.top
                //     ) {

                //     enemy.style.display = "none";
                //     // char.style.display ="none";
                //     // alert("TRY AGAIN!!!");
                // }
                // if (enemy2Left < charLeft + 50 &&
                //     enemy2Left > 0 && charTop >= 400
                // ) {
                //     // enemy2.style.animation = "none";
                //     enemy2.style.display = "none";
                // }
                if (charLeft < enemy2Left + enemy2Width &&
                    charLeft + charWidth > enemy2Left &&
                    charTop < enemy2Top + enemy2Height &&
                    charTop + charHeight > enemy2Top
                ) {
                    enemy2.style.display = "none";
                } else{
                    enemy2.style.display="inline";
                }

                if (charLeft < goon1BulletLeft + goon1BulletWidth &&
                    charLeft + charWidth > goon1BulletLeft &&
                    charTop < goon1BulletTop + goon1BulletHeight &&
                    charTop + charHeight > goon1BulletTop
                ) {
                    goon1Bullet.style.opacity = 0;
                    reverseBullet.style.opacity = 1;
                    reverseBullet.style.visibility = "visible";             
                    // reverseBullet.style.animation =  "reverseBullet";
                 } 
            }, 10);
        } // end of Function attackCollision


        
        function bounceBullet(){
         var reverse =  setInterval(function(){
                var reverseBullet = document.getElementById("reverseBullet");
                var robot = document.getElementById("goon1");
                var char = document.getElementById("mainCharacter");

                var charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
                var charLeft = parseInt(window.getComputedStyle(char).getPropertyValue("left"));
                var charWidth = parseInt(window.getComputedStyle(char).getPropertyValue("width"));
                var charHeight = parseInt(window.getComputedStyle(char).getPropertyValue("height"));
               
                var robotLeft = parseInt(window.getComputedStyle(robot).getPropertyValue("left"));
                var reverseBulletLeft = parseInt(window.getComputedStyle(reverseBullet).getPropertyValue("left"));

                if (charLeft < goon1BulletLeft + goon1BulletWidth &&
                    charLeft + charWidth > goon1BulletLeft &&
                    charTop < goon1BulletTop + goon1BulletHeight &&
                    charTop + charHeight > goon1BulletTop
                ){

                   
                }
            },10);
        
        }   
        

        function changeCostume(){
            var changeCostume = setInterval(function () {
                var char = document.getElementById("mainCharacter");
                var fireEnemy = document.getElementById("fireEnemy");
                var charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
                var charLeft = parseInt(window.getComputedStyle(char).getPropertyValue("left"));
                var charWidth = parseInt(window.getComputedStyle(char).getPropertyValue("width"));
                var charHeight = parseInt(window.getComputedStyle(char).getPropertyValue("height"));             
                var enemy3Left = parseInt(window.getComputedStyle(fireEnemy).getPropertyValue("left"));
                var enemy3Width = parseInt(window.getComputedStyle(fireEnemy).getPropertyValue("width"));
                var enemy3Top = parseInt(window.getComputedStyle(fireEnemy).getPropertyValue("top"));
                var enemy3Height = parseInt(window.getComputedStyle(fireEnemy).getPropertyValue("height"));

                if (charLeft < enemy3Left + enemy3Width &&
                    charLeft + charWidth > enemy3Left &&
                    charTop < enemy3Top + enemy3Height &&
                    charTop + charHeight  > enemy3Top 
                ) {
                  
                  
                        char.style.backgroundImage = "url('../images/charHit1.png')";
                        char.style.opacity=0.5;
                        
                    
                } else{
                    char.style.opacity=1;
                   
                }
                

            },10);
        
        }


         function mouseClick(event) {
             if (event.button == 0) {
                 moveleft += 10;
                 mainCharacter.style.left = moveleft + 'px';
                 mainCharacter.style.backgroundImage = "url('../images/attack.png')";
                 attackCollision();
             } //end of if attack mousclick
            //  else{
            //     mainCharacter.style.backgroundImage = "url('../images/x3rima.png')";
            //  }
            
            
         }//end of function MouseClick


         function gameOver(){
            var deadCharacter = setInterval(function () {
                // let hasjustCollided = false;
                var char = document.getElementById("mainCharacter");
                var enLeft = document.getElementById("enemy");
                var en2Left = document.getElementById("enemy2");
                var goon1Bullet = document.getElementById("goon1Bullet");


                var charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
                var charLeft = parseInt(window.getComputedStyle(char).getPropertyValue("left"));
                var charWidth = parseInt(window.getComputedStyle(char).getPropertyValue("width"));
                var charHeight = parseInt(window.getComputedStyle(char).getPropertyValue("height"));
               
                var enemyLeft = parseInt(window.getComputedStyle(enLeft).getPropertyValue("left"));
                var enemyWidth = parseInt(window.getComputedStyle(enLeft).getPropertyValue("width"));
                var enemyTop = parseInt(window.getComputedStyle(enLeft).getPropertyValue("top"));
                var enemyHeight = parseInt(window.getComputedStyle(enLeft).getPropertyValue("height"));

            if (charLeft < enemyLeft + enemyWidth &&
                    charLeft + charWidth > enemyLeft &&
                    charTop < enemyTop + enemyHeight &&
                    charTop + charHeight > enemyTop
                ) {
                   
                    enemy.style.display = "none";
                    enemy.style.visibility="hidden";
                    enemy.style.animation = "none";
                    mainCharacter.style.display = "none";
                    mainCharacter.style.visibility = "hidden";
                    mainCharacter.style.animation = "none";
                    alert("SORRY PLEASE TRY AGAIN!!")
                    // document.onkeyup = gameOver;
                }
            }, 10);
         }
         
          document.onmousedown = mouseClick;

         

        /*************************************************************/


