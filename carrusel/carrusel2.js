let sliderIndex = 0;

function showSlide(index){
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot-nav');

    if(index >= slides.length) sliderIndex = 0;
    if(index < 0) sliderIndex = slides.length - 1;
    for(let i =0; i<slides.length; i++ ){
        slides[i].style.display = 'none';
        dots[i].classList.remove('active-dot')
    }
    
    slides[sliderIndex].style.display = 'block';
    dots[sliderIndex].classList.add('active-dot');

}

showSlide(sliderIndex);

document.querySelector('#arrow-prev').addEventListener('click', ()=>{
    showSlide(--sliderIndex)
});

document.querySelector('#arrow-next').addEventListener('click', ()=>{
    showSlide(++sliderIndex)
});

document.querySelectorAll('.dot-nav').forEach((element) => {
    element.addEventListener('click', function(){
        var dots = Array.prototype.slice.call(this.parentElement.children),
        dotIndex = dots.indexOf(element);
        showSlide(sliderIndex = dotIndex);
    })
})

setInterval(()=>{
    showSlide(++sliderIndex)
}, 2000)