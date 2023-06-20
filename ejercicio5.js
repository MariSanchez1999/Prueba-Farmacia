
var texto = "texto";
var invertida = "";

for (var i = texto.length - 1; i >= 0; i--) {
  invertida += texto.charAt(i);
}
console.log("Cadena invertida: " + invertida);
