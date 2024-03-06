const imgCont = document.querySelector("#imgCont")

const imgStore = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png'
]

let imgNow = 0

const imgSlider = () => {
    setInterval(() => {
        if (imgNow !== imgStore.length - 1) {
            imgNow += 1
        } else {
            imgNow = 0
        }
        imgCont.classList.add('hide')
        setTimeout(() => {
            imgCont.src = `./src/img/slider(2)/${imgStore[imgNow]}`
            imgCont.classList.remove('hide')
        }, 500)
    }, 3000)
}

imgSlider()