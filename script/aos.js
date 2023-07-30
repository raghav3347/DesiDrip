const fader = document.querySelectorAll('.fade-up, .fade-left, .fade-right')

const aosoptions = {
    threshold: 0.2,
    
}

const aos = new IntersectionObserver(function(entries, aos){

    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            aos.unobserve(entry.target);
        }
    });

}, aosoptions);


fader.forEach(fader =>{
    aos.observe(fader);
})