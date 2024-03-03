let slideIndex = 1;
    
const showSlides = () => {
    let i;
    const slides = document.getElementsByClassName("main_block4_forslider3_bl");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 4000);
}

showSlides()