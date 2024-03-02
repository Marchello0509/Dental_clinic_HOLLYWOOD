const texts = {
    text1: document.querySelector("#text1"),
    text2: document.querySelector("#text2")
};

let texts1 = [
    "Лікар-стоматолог",
    "Асистент стоматолога",
    "Адміністратор",
    "Асистент стоматолога",
    "Лікар-стоматолог",
];

let texts2 = [
    "Киселиця Владислав Юрійович",
    "Коваль Тетяна",
    "Олексюк Аліна",
    "Звягіна Майя Юріївна",
    "Твердохліб Андрій Валерійович"
];

let currentIndex1 = 0;
let currentIndex2 = 0;

function changeText() {
    texts.text1.textContent = texts1[currentIndex1];
    texts.text2.textContent = texts2[currentIndex2];

    currentIndex1 = (currentIndex1 + 1) % texts1.length;
    currentIndex2 = (currentIndex2 + 1) % texts2.length;
}

setInterval(changeText, 3000);
