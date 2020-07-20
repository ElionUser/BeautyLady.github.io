
var conterSlide = 0 

var data = [
    {'name':'Chalina floral','price':'$ 240,00','categories':'CHALINAS - 70% OFF'},
    {'name':'Saco formal','price':'$ 4379,89','categories':'SACOS - 21% OFF'},
    {'name':'Botas de gamuza','price':'$ 2931,99','categories':'Botas - 12% OFF'},
    {'name':'Ruana de lana','price':'$ 1230,99','categories':'Ruanas - 27% OFF'},
    {'name':'Gorra y guantes','price':'$ 3010,00','categories':'Guantes - 14% OFF'},
    {'name':'Bufanda de croshet','price':'$ 2130,19','categories':'Bufandas - 31% OFF'}
]

var nameItem,price,category

function loadSlide()
{
    btnBack = document.getElementById('btn-back')
    btnNext = document.getElementById('btn-next')

    nameItem = document.getElementById('nameItem')
    price = document.getElementById('price')
    category = document.getElementById('category')

    imgSlide = document.getElementById('img-slide')

    btnNext.addEventListener('click',Next)
    btnBack.addEventListener('click',Back)

}

function Next()
{
    conterSlide++
    if(conterSlide >= 6)
    {
        conterSlide = 0
    }
    hiddenImgSlide()
    setData(conterSlide)
    setTimeout(ImgSlideVisible ,0500)
}

function Back()
{
    conterSlide--
    if(conterSlide <= -1)
    {
        conterSlide = 5
    }
    hiddenImgSlide()
    setData(conterSlide)
    setTimeout(ImgSlideVisible ,0500)
}

function setData(_conterData_)
{
    category.innerHTML = data[_conterData_].categories
    price.innerHTML = data[_conterData_].price
    nameItem.innerHTML = data[_conterData_].name
}




function hiddenImgSlide()
{
    imgSlide.style.opacity = 0
}

function ImgSlideVisible()
{
    setImage()
    imgSlide.style.opacity = 1
}

function setImage()
{
    imgSlide.setAttribute('src','imagenes/slide/slide-0' + conterSlide + '.png')
}



addEventListener('load',loadSlide)