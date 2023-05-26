const body = document.body;
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');

color1.addEventListener('click', function () {
  body.classList.remove('color2', 'color3');
  body.classList.add('color1');
});

color2.addEventListener('click', function () {
  body.classList.remove('color1', 'color3');
  body.classList.add('color2');
});

color3.addEventListener('click', function () {
  body.classList.remove('color2', 'color1');
  body.classList.add('color3');
});