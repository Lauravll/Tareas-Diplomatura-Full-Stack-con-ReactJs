let mayor = 0;
const num = [6, 23, 55, 12, 98];

for (let i = 0; i < num.length; i++) {
  if (num[i] > mayor) {
    mayor = num[i]
  }
}

console.log(`El mayor es ${mayor}`)
document.write(`El mayor es ${mayor}`)

