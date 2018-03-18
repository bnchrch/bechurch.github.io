particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

const onLoad = () => {
  document.getElementById("main").className += " show";
}

window.onload = onLoad;
