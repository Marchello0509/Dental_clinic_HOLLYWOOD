const mobImg = document.querySelector("#mobImg")

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
        mobImg.src = `./src/img/result(3)/${imgStore[imgNow]}`
    }, 3000)
}

imgSlider()