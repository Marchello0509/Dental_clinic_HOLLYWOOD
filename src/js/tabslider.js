let slideIndex = 1;
    
const showSlides = () => {
    let i;
    const slides = document.getElementsByClassName("tabMain_block4_bl_forslider3_block");
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