var power = false
var widthBody

function loadMenu()
{
    widthBody = document.body.clientWidth
    heightBody = document.body.clientHeight
    nav = document.getElementById('nav')


    btnMenu = document.getElementById('button-menu')
    leftMenu = document.getElementById('l-menu')
    
    btnMenu.addEventListener('click',toggleMenu)

    navColor()

    window.onscroll = () => { navColor()  }
}

function toggleMenu()
{
    if( power == false)
    {
        visibilityON()

        // nav.style.backgroundColor = 'rgb(254, 212, 255)'

    } else { 
    
        visibilityOFF()

        navColor()
    
    }
}

function navColor()
{
    if(window.scrollY > 100)
    {
        nav.style.backgroundColor = '#fbeeff'
        nav.style.boxShadow = '0px 0px 15px rgba(0,0,0,.1)'
    
    } else {
        
        nav.style.backgroundColor = 'transparent'
        nav.style.boxShadow = '0px 0px 0px transparent'
        
    }
}

function visibilityON()
{
    power = true
    leftMenu.style.opacity = 1
    leftMenu.style.visibility = 'visible'
    leftMenu.style.backgroundColor = '#fbeeff'

}

function visibilityOFF()
{
    power = false
    leftMenu.style.opacity = 0
    leftMenu.style.visibility = 'hidden'
}

addEventListener('load',loadMenu)