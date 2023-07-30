const carousel = document.querySelector('.carousel-container')
const toUp = document.querySelector('.to-up')

const options = {
}

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (entry.isIntersecting){
            toUp.classList.add('hide')
        }else{
            toUp.classList.remove('hide')
        }
        
    });
}, options)

observer.observe(carousel);