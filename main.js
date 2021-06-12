import './style.css'

// Option 2 JS Manuell

// $('.navbar a').on('click', function(e){

//     if(this.hash !== ''){
//         e.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800
//         );
//     }
// })

// Option 3 for smooth scroll
// https://github.com/cferdinandi/smooth-scroll

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 500
})