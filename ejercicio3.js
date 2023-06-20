const matriz = [
    [17, 9, 36],
    [8, 7, 3],
    [15, 28, 57]
  ];
  
  const filas = matriz.length;
  const columnas = matriz[0].length;
  
  const lista = [];
  
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      lista.push(matriz[i][j]);
    }
  }
  
  lista.sort((a, b) => a - b);
  
  const longitud = lista.length;
  let mediana;
  
  if (longitud % 2 === 0) {
    const indice1 = longitud / 2 - 1;
    const indice2 = longitud / 2;
    mediana = (lista[indice1] + lista[indice2]) / 2;
  } else {
    const indice = Math.floor(longitud / 2);
    mediana = lista[indice];
  }
  
  console.log("Elementos ordenados:", lista.join(", "));
  console.log("Mediana:", mediana);
  