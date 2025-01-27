document.addEventListener('DOMContentLoaded', () => {
    const loaderContainer = document.getElementById('loaderContainer');
    const contentWrapper = document.getElementById('contentWrapper');
      const navLinks = document.querySelectorAll('nav a');

    setTimeout(() => {
        loaderContainer.style.opacity = '0';
        contentWrapper.style.display = 'block';
         setTimeout(() => {
             loaderContainer.style.display = 'none';
        }, 500)
    }, 1000);
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
         behavior: 'smooth',
            block: 'start'
        })
      })
    })
});