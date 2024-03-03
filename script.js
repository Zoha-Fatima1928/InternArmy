let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = ()=> {
    sections.forEach(sec => {

        let top=window.scrollY;
        let offSet = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offSet && top < offSet + height)
        {
            navLinks.forEach.apply(
                links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id +']').classList.add('active');

                }
            );
        };
    });
 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active')
}

ScrollReveal({
    distance : "80px",
    duration: 2000,
    delay:200,
});
ScrollReveal().reveal('.homeContent, heading', { origin: 'top' });
ScrollReveal().reveal('.homeImg, , .servicesContainer, .portfolioBox, .contact form', { origin: 'button' });
ScrollReveal().reveal('.homeContent h1, .aboutImg ', { origin:'left' });
ScrollReveal().reveal('.homeContent p, .aboutContent ,  .servicesContainer, .contact form, .portfolioBox', { origin:'right' });



var btnContainer = document.getElementById("navbar");

// Get all buttons with class="btn" inside the container
