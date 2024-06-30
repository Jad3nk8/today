document.addEventListener('DOMContentLoaded', (event) => {
    let elementen = document.getElementsByClassName('slideshow1');
    let textElement = document.getElementById('slideshowText');
    let a = 0;
    const texts = ["...change", "...living your dreams", "...doing better", "...learning"];

    // Zorg ervoor dat de eerste afbeelding zichtbaar is
    if (elementen.length > 0) {
        elementen[0].classList.add('active');
        textElement.textContent = texts[0];
    }

    function showText(){
        for (let i = 0; i < elementen.length; i++) {
            elementen[i].classList.remove('active');
        }
        elementen[a].classList.add('active');
        textElement.textContent = texts[a];
        a++;
        if (a >= elementen.length) {
            a = 0;
        }
    }

    setInterval(showText, 3000);
});
