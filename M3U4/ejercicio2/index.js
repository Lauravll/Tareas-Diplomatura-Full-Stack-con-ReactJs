const contador = document.getElementById('contador');
const cantidad = document.getElementById('cantidad');
let caracteres = 0;

contador.addEventListener('keyup', function () {
  caracteres = contador.value.length; 
  cantidad.innerText = caracteres;
})

