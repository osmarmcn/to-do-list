document.addEventListener('DOMContentLoaded', function() {
    const scrollRevealOptions = {
        distance: '100px',
        duration: 3000,
        reset: true,
        origin: 'bottom'
    };
    // Revela o container-a primeiro
    ScrollReveal().reveal('.container-a', { ...scrollRevealOptions, delay: 0 });

    // Depois revela o container-b
    ScrollReveal().reveal('.container-b', { ...scrollRevealOptions, delay: 100 });

    // Por último revela o container-c
    ScrollReveal().reveal('.container-c', { ...scrollRevealOptions, delay: 150 });

    // Forçar re-renderização
    document.documentElement.style.display = 'none';
    setTimeout(() => {
        document.documentElement.style.display = '';
    }, 0);
});



