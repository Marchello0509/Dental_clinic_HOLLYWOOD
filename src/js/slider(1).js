document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.querySelector('.main_block2_bl2_cont_cw_cardsc');
    const cards = cardsContainer.querySelectorAll('.main_block2_bl2_cont_cw_cardsc_box');
    let currentIndex = 0;
    
    function showCard(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.classList.remove('slide-out-left', 'slide-out-right');
            } else if (i < index) {
                card.classList.add('slide-out-left');
            } else {
                card.classList.add('slide-out-right');
            }
        });
    }
    
    function nextCard() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showCard(currentIndex);
    }
    
    function prevCard() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - 1;
        }
        showCard(currentIndex);
    }
    
    // Trigger next card on click
    document.getElementById('click').addEventListener('click', function() {
        nextCard();
    });
});
