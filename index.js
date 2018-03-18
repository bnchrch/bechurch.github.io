particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

const onLoad = () => {
  window.setTimeout(() => {
    document.getElementById("main").className += " show";
  }, 750);
}

window.onload = onLoad;
