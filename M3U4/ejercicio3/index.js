var alumnos = [
  {
    nombre: 'Juan Gomez',
    nota: 7

  }, {

    nombre: 'Pedro Rodriguez',
    nota: 4

  }, {

    nombre: 'Roxana García',
    nota: 8

  }, {

    nombre: 'Luciano Lopez',
    nota: 5

  }, {

    nombre: 'Fernanda Gimenez',
    nota: 6

  }, {

    nombre: 'Florencia Martinez',
    nota: 10

  }, {

    nombre: 'Raul Sanchez',
    nota: 7

  }, {

    nombre: 'Sandra Figueroa',
    nota: 8
  }

];

const alumnosAprobados = document.getElementById('alumnosAprobados');
var nombres = [];

const aprobados = alumnos.filter(alumno => alumno.nota >= 7);

for (var i = 0; i < aprobados.length; i++) {
  nombres.push(aprobados[i].nombre + ' Nota: ' + aprobados[i].nota);
}

alumnosAprobados.innerText = nombres.join(', ');

console.log(aprobados);