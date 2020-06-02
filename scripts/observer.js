const header = document.querySelector('nav');
const showcase = document.getElementById('showcase');

const showcaseOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const showcaseObserver = new IntersectionObserver(function(
    entries,
    showcaseObserver
){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add("nav-scrolled");
        }else{
            header.classList.remove("nav-scrolled");
        }
    });
},
showcaseOptions);

showcaseObserver.observe(showcase);
