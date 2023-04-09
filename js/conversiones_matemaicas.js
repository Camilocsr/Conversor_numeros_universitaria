document.addEventListener('submit', conversor=>{ // función del formulario..
  conversor.preventDefault();
  const numero = document.getElementById('num');
  const valor = numero.value;
  const parrafo = document.getElementById('parrafo-formulario');
  const parrafo1 = document.getElementById('parrafo-formulario1');
  const parrafo2 = document.getElementById('parrafo-formulario2');
  let entrar = false;
  let texto = "";
  let texto1 = "";
  let texto2 = "";
  if(valor <= 0){
      texto += `El numero tiene que ser positvo para realizar la conversion que desea. <br>`;
      entrar = true;
  } else {
      function decimalToBinary(decimal) {
        let binary = "";
        while (decimal > 0) {
          binary = (decimal % 2) + binary;
          decimal = Math.floor(decimal / 2);
        }
        return binary;
      }
      let result = decimalToBinary(valor).toString();
      texto += `El numero en binario es ${result}<br>`;

      function decimalToOctal(decimal) {
        let octal = "";
        while (decimal > 0) {
          octal = (decimal % 8) + octal;
          decimal = Math.floor(decimal / 8);
        }
        return octal;
      }
        
        
      result = decimalToOctal(valor).toString();
      texto1 += `El numero en octal es ${result}<br>`;

      function decimalToHexadecimal(decimal) {
        let hexadecimal = "";
        while (decimal > 0) {
          const remainder = decimal % 16;
          if (remainder < 10) {
            hexadecimal = remainder + hexadecimal;
          } else {
            hexadecimal = String.fromCharCode(remainder + 55) + hexadecimal;
          }
          decimal = Math.floor(decimal / 16);
        }
        return hexadecimal;
      }
    
      result = decimalToHexadecimal(valor).toString();
      texto2 += `El numero en Hexadecimal es ${result}<br>`;
      entrar = true;
  }
  if(entrar){
      parrafo.innerHTML =  texto;
      parrafo1.innerHTML =  texto1;
      parrafo2.innerHTML =  texto2;
  }
});

