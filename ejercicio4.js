const matriz = [
  [17, 9, 36, 21],
  [8, 28, 3, 1],
  [15, 7, 5, 30],
  [10, 17, 4, 12]
];

let sumaDiagonal = 0;

for (let i = 0; i < matriz.length; i++) {
  sumaDiagonal += matriz[i][i];
}

console.log("La suma es:", sumaDiagonal);
