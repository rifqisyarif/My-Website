const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".about-me-section")[0].classList.add("fadeInRight");
            console.log('runned');
        }
    })
})

observer.observe(document.querySelector(".about-me-section"));