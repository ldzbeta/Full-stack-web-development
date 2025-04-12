
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const totalCards = document.querySelectorAll('.service-card').length;
    const cardsToShow = 3;
    const cardWidth = 100 / cardsToShow;
    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * cardWidth;
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCards - cardsToShow;
        }
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalCards - cardsToShow) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });

    updateSlider();