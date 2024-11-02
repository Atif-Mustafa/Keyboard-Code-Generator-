let kp = document.getElementById('kp');
let container = document.querySelector('.container')
let kc = document.getElementById('kc');
let text = document.getElementById("text");
let key = document.getElementById('key')

document.addEventListener('keyup', function(e){
    
    text.innerText='You Pressed ';
    key.innerText= e.key;
    let audio = new Audio('bc_sound.mp3');
    audio.play();

    kc.innerText = e.keyCode;

   

   console.log(container.childNodes)
})
