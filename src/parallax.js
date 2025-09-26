let ticking = false;

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            const bodySection = document.querySelector('body');
            const scrollPosition = window.scrollY;
            const parallaxSpeed = 0.3; // Velocità dell'effetto parallasse

            if (window.innerWidth > 768) {
                let parallaxOffset = scrollPosition * parallaxSpeed;
                bodySection.style.backgroundPositionY = `${parallaxOffset}px`;
            } else {
                bodySection.style.backgroundPositionY = 'center';
            }
            ticking = false;
        });

        ticking = true;
    }
});