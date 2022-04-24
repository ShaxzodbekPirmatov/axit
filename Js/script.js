let inp = document.querySelectorAll('input.vod');
let btn_look = document.querySelector('#look');



     

btn_look.addEventListener('mousedown', function(){
     inp[2].setAttribute('type','text');
     inp[2].style.color = 'orange';
     btn_look.style.color  ='orange';
})
btn_look.addEventListener('mouseup', function(){
     inp[2].setAttribute('type','password');
     inp[2].style.color = 'black';
     btn_look.style.color  ='#bdbdbd';
})


