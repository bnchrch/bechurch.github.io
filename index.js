particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

const start = () => {
  const a = document.getElementById("main");
  console.log("test", a);
  a.className += " show";
}

window.onload = start;
