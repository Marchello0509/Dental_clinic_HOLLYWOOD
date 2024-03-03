const sliderEl = {
    img: document.querySelector("#sliderImg"),
    btns: {
        btn1: document.querySelector('#btn1'),
        btn2: document.querySelector('#btn2')
    }
}

const imgStore = [
    'img1.png',
    'img2.png',
    'img3.png'
]

let imgNow = 0

sliderEl.btns.btn1.addEventListener('click', () => {
    if (imgNow != 0) {
        imgNow -= 1
    } else {
        imgNow = imgStore.length-1
    }
    sliderEl.img.classList.add('hide'); 
    setTimeout(() => {
        sliderEl.img.src = `./src/img/result/${imgStore[imgNow]}`
        sliderEl.img.classList.remove('hide'); 
    }, 500); 
})

sliderEl.btns.btn2.addEventListener('click', () => {
    if (imgNow != imgStore.length-1) {
        imgNow += 1
    } else {
        imgNow = 0
    }
    sliderEl.img.classList.add('hide'); 
    setTimeout(() => {
        sliderEl.img.src = `./src/img/result/${imgStore[imgNow]}`
        sliderEl.img.classList.remove('hide'); 
    }, 500); 
})
