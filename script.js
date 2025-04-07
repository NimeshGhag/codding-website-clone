let hero = document.querySelector('.hero');
let h1 = document.querySelectorAll('h1');
let crsr = document.querySelector('.mouse');
let content = document.querySelector('#con')
let img = document.querySelector('#con img')



hero.addEventListener('mousemove',function(dets){
    let mouseX = dets.clientX;
    let mouseY = dets.clientY;

    crsr.style.left = (mouseX - crsr.offsetWidth / 2) + 'px'
    crsr.style.top = (mouseY - crsr.offsetHeight / 2) + 'px'  
})
hero.addEventListener('mouseleave',function(){
    crsr.style.opacity = 0
})
hero.addEventListener('mouseenter',function(){
    crsr.style.display ='block'
    crsr.style.opacity = 1
})
h1[1].addEventListener('mouseenter',function(){
    crsr.style.width = '30px'
    crsr.style.height = '30px'
})
h1[1].addEventListener('mouseleave',function(){
    crsr.style.width = '20px'
    crsr.style.height = '20px'
})

content.addEventListener('mousemove',function(dets){
    let imgX = dets.clientX;
    let imgY = dets.clientY;
    img.style.left = (imgX - img.offsetWidth / 2) + 'px'
    img.style.top = (imgY - img.offsetHeight / 2) + 'px' 
})
content.addEventListener('mouseleave',function(){
    img.style.opacity = 0
})
content.addEventListener('mouseenter',function(){
    img.style.opacity = 1
})