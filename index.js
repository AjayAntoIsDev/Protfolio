particlesJS.load('particles', 'frameworks/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
var image = document.getElementsByClassName('bg-parallax');
new simpleParallax(image, {
    scale: 1.4
});
