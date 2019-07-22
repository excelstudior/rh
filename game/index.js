var container=document.getElementById('container');
var plane=document.getElementById('plane');
// container to window
var container_left=container.offsetLeft;
var container_top=container.offsetTop;
var container_width=container.offsetWidth;
var container_height=container.offsetHeight;
// create bullets
var bullets=[];
var enemys=[];
var counter=0;

container.addEventListener('mousemove',function(event){
    //get event object
    console.log(event);
    //mouse to window
    var mouse_left=event.clientX;
    var mouse_top=event.clientY;
    // plane to container
    var plane_left=mouse_left-container_left;
    var plane_top=mouse_top-container_top;


    if(plane_left>33 
        && (container_width-plane_left)>30
        && (plane_top>40)
        && (plane_top)>160){
        plane.style.left=plane_left+'px';
            plane.style.top=plane_top+'px';
    }
    


})

function createBullet(){
    var bullet=document.createElement('div')
    var plane_left=plane.offsetLeft;
    var plane_top=plane.offsetTop;
    bullet.className='bullet';
    container.appendChild(bullet);
    bullet.style.left=plane_left+31+'px';
    bullet.style.top=plane_top-29+'px';
    bullets.push(bullet);
}

function createEnemy(){
    var enemy=document.createElement("div");

    enemy.className='smail-enemy';
    container.appendChild(enemy);
    var random=Math.floor(Math.random()*(container_width-enemy.offsetWidth));
    enemy.style.left=random+'px';
    enemys.push(enemy);
}

createBullet()
createEnemy()
//
setInterval(function(){
    if(counter%5==0){
        createBullet()
    }
    if (counter%20===0){
        createEnemy()
    }
    counter++;
    //20ms fire once
    for (var i=0;i<bullets.length;i++){
        var bullet=bullets[i]
        var bullet_top =bullet.offsetTop;
        bullet.style.top=bullet_top-20+'px';
        if(bullet_top<0){
            container.removeChild(bullet);
            bullets.splice(i,1)
            return;
        }
    }

    //enemys
    for(var j=0;j<enemys.length;j++){
        var enemy=enemys[j];
        var enemy_top=enemy.offsetTop;
        if(enemy_top>container_height){
            container.removeChild(enemy);
            enemys.splice(j,1);
        }

        enemy.style.top=enemy_top+2+'px';
    }

},20)