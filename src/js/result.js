const tabImg = document.querySelector("#tabImg")

const imgStore = [
    '1.png',
    '2.png',
    '3.png',
]

let imgNow = 0

const imgSlider = () => {
    setInterval(() => {
        if (imgNow !== imgStore.length - 1) {
            imgNow += 1
        } else {
            imgNow = 0
        }
        tabImg.src = `./src/img/result(2)/${imgStore[imgNow]}`
    }, 3000)
}

imgSlider()