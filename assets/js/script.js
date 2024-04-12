const sliderItem = document.querySelectorAll('.slider-item')
for (let index = 0; index < sliderItem.length; index++) {
    
    sliderItem[index].style.left = index *100 + "%"
}

const sliderItems = document.querySelector('.slider-items')
const arrowRight = document.querySelector('.ri-arrow-right-s-line')
const arrowLeft = document.querySelector('.ri-arrow-left-s-line')
let i = 0
if(arrowRight != null && arrowLeft != null){
    arrowRight.addEventListener('click',()=>{
    
        if(i< sliderItem.length -1) {
            i++
            sliderItems.style.left = -i*100+"%"
        }
        else{
            return false
        }
    })
    arrowLeft.addEventListener('click',()=>{
    if(i<=0){
        return false
    }
    {
        i--
        sliderItems.style.left = -i*100+"%"
    }
    
    })
    function autoSlider(){
        if(i<sliderItem.length-1){
            i++
            sliderItems.style.left = -i*100+"%"
        }else 
        {
            i=0
            sliderItems.style.left = -i*100+"%"
        }
    }
setInterval(autoSlider, 4000)

}




/* menu reponsive */
const Menubar = document.querySelector('.header-menu-mobile')
const headerNav = document.querySelector('.header-nav')
Menubar.addEventListener('click',()=>{
    headerNav.classList.toggle('active')
})

// product item img
const image = document.querySelectorAll('.product-images-item img')
const imagedetail = document.querySelector('.image-detail')
for (let index = 0; index < image.length; index++) {
    image[index].addEventListener('click',()=>{
        imagedetail.src = image[index].src
        for (let i = 0; i < image.length; i++) {
            image[i].classList.remove('active')
            
        }
        image[index].classList.toggle('active')
    })
    
}