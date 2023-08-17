let menu = document.getElementById('Menu')
let main = document.getElementsByTagName('main')[0]
let mainMenu = document.querySelectorAll('#mainMenu>div')
let logo = document.getElementById('logo')
let img = document.getElementById('img')
let rightMenu = document.getElementById('rightMenu')
let _right = document.querySelectorAll('#rightMenu>i')
let a = document.querySelectorAll('#mainMenu a')
let _box = document.querySelectorAll('#Header>div')
let _box1 = document.querySelectorAll('#slider2>div')
let _box2 = document.querySelectorAll('#slider3>div')
let arrowright = document.getElementById('arrowRight')
let arrowleft = document.getElementById('arrowLeft')
let arrowright2 = document.getElementById('arrowRight2')
let arrowleft2 = document.getElementById('arrowLeft2')
let arrowright3 = document.getElementById('arrowRight3')
let arrowleft3 = document.getElementById('arrowLeft3')
let button = document.querySelectorAll('#button>div')
let button2 = document.querySelectorAll('#button2>div')
let button3 = document.querySelectorAll('#button3>div')



let turn = 0
let images = document.querySelectorAll("#Header>img");
let images2 = document.querySelectorAll('#slider2>img')


// fixed menu

main.addEventListener('scroll' , (e)=>{
    let st = e.target.scrollTop
    if(st > 100){
        menu.style.position = 'fixed'
        menu.style.top = 0
        menu.style.left = 0
        menu.style.height ='13%'
        menu.style.background = 'rgba(255,255,255,0.96)'
        logo.style.alignItems = 'center'
        img.setAttribute('src' , 'https://preview.colorlib.com/theme/pato/images/icons/logo2.png')
        rightMenu.style.paddingTop = 0
        _right.forEach((val) =>{
            val.style.color = '#010101'
        })
        mainMenu.forEach((val) =>{
            val.style.color = '#010101'
        })
        a.forEach((val) =>{
            val.style.alignItems = 'center'
        })
    }else{
        menu.style.position = ''
        menu.style.background = 'transparent'
        menu.style.height ='10%'
        logo.style.alignItems = 'flex-end'
        img.setAttribute('src' , 'https://preview.colorlib.com/theme/pato/images/icons/logo.png')
        rightMenu.style.paddingTop = '1.5rem'
        _right.forEach((val) =>{
            val.style.color = 'white'
        })
        mainMenu.forEach((val) =>{
            val.style.color = 'white'
        })
        a.forEach((val) =>{
            val.style.alignItems = 'flex-end'
        })
    }
})

// slider
function showImage(n) {
    images[turn].style.opacity = 0;
    images2[turn].style.opacity = 0;
    _box[turn].style.opacity = 0;
    _box1[turn].style.opacity = 0;
    _box2[turn].style.opacity = 0;
    turn = (n + images.length) % images.length;
    images[turn].style.opacity = 1;
    images2[turn].style.opacity = 1;
    _box[turn].style.opacity = 1;
    _box1[turn].style.opacity = 1;
    _box2[turn].style.opacity = 1;

}
showImage(0);
setInterval(function () {
    showImage(turn + 1);
}, 5000);

arrowleft.addEventListener('click' , ()=>{
    showImage(turn - 1)
})
arrowright.addEventListener('click' , ()=>{
    showImage(turn + 1)
})
arrowleft2.addEventListener('click' , ()=>{
    showImage(turn - 1)
})
arrowright2.addEventListener('click' , ()=>{
    showImage(turn + 1)
})
arrowleft3.addEventListener('click' , ()=>{
    showImage(turn - 1)
})
arrowright3.addEventListener('click' , ()=>{
    showImage(turn + 1)
})

button.forEach((val , i)=>{
    val.addEventListener('click' , ()=>{
        showImage(i)
    })
})
button2.forEach((val , i)=>{
    val.addEventListener('click' , ()=>{
        showImage(i)
    })
})
button3.forEach((val , i)=>{
    val.addEventListener('click' , ()=>{
        showImage(i)
    })
})



