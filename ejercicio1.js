function compararMatrices(matriz1, matriz2) {
  let elementosMayores1 = 0;
  let elementosMayores2 = 0;
  let elementosIguales = 0;

  for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1[i].length; j++) {
      if (matriz1[i][j] > matriz2[i][j]) {
        elementosMayores1++;
      } else if (matriz2[i][j] > matriz1[i][j]) {
        elementosMayores2++;
      } else {
        elementosIguales++;
      }
    }
  }

  console.log("El arreglo 1 contiene " + elementosMayores1 + " elementos mayores");
  console.log("El arreglo 2 contiene " + elementosMayores2 + " elementos mayores");
  console.log("Existen " + elementosIguales + " elementos iguales en ambos arreglos");
}


const matriz1 = [
  [17, 9, 36],
  [8, 7, 3],
  [15, 28, 87]
];

const matriz2 = [
  [9, 21, 36],
  [16, 65, 4],
  [12, 28, 31]
];

compararMatrices(matriz1, matriz2);
