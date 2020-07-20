
var power = false

function LoadBoxCartItems()
{

    btnCart = document.getElementById('btn-cart')

    boxCartItems = document.getElementById('box-cart-items')

    btnCart.addEventListener('click',toggle)

}

function toggle()
{
    if(power == false)
    {
        power = true
        boxCartItems.style.opacity = '1'
        boxCartItems.style.visibility = 'visible'

    } else {

        power = false
        boxCartItems.style.opacity = '0'
        boxCartItems.style.visibility = 'hidden'
    }
}

addEventListener('load',LoadBoxCartItems)