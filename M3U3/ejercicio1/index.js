const distancia = prompt('Ingrese distancia en metros:', '');
let mensaje = '';

if (distancia > 0 && distancia <= 1000) {
  mensaje = `El medio de transporte mas apropiado para una distancia de ${distancia} metros es ir a pie`;
} else if (distancia > 1000 && distancia <= 10000) {
  mensaje = `El medio de transporte mas apropiado para una distancia de ${distancia} metros es ir en bicicleta`;
} else if (distancia > 10000 && distancia <= 30000) {
  mensaje = `El medio de transporte mas apropiado para una distancia de ${distancia} metros es ir en colectivo`;
} else if (distancia > 30000 && distancia <= 100000) {
  mensaje = `El medio de transporte mas apropiado para una distancia de ${distancia} metros es ir en auto`;
} else if (distancia >= 100000) {
  mensaje = `El medio de transporte mas apropiado para una distancia de ${distancia} metros es ir en avión`;
}

console.log(mensaje)
document.write(mensaje)

