function calcularSuma(matriz) {
  let suma = 0;
  let suma2 = 0;
  let elementosAplican = [];
  let elementosNoAplican = [];
  let totalElementos = 0;

  matriz.forEach((fila) => {
    fila.forEach((elemento) => {
      suma += elemento;
      totalElementos++;
    });
  });

  const promedio = suma / totalElementos;
  const rango = promedio * 0.6;

  matriz.forEach((fila) => {
    fila.forEach((elemento) => {
      if (Math.abs(elemento - promedio) <= rango) {
        elementosAplican.push(elemento);
        suma2 += elemento;
      } else {
        elementosNoAplican.push(elemento);
      }
    });
  });

  elementosNoAplican.sort((a, b) => a - b);
  elementosAplican.sort((a, b) => a - b); 

  console.log("La suma es:", suma2);
  console.log("Promedio:", promedio);
  console.log("No aplican para sumar:", elementosNoAplican.join(", "));
  console.log("Sí aplican para sumar:", elementosAplican.join(", "));
}

const matriz = [
  [17, 9, 36],
  [8, 7, 3],
  [15, 28, 57]
];

calcularSuma(matriz);
