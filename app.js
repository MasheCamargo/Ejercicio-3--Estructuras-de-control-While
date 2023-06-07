
//1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

    function mostrarMultiplos() {
            var numero = parseInt(document.getElementById("numero").value);
            var i = 1;
            var resultado = "";
            
            while (i <= numero) {
                if (i % 5 === 0) {
                    resultado += i + " ";
                }
                i++;
            }
            
            document.getElementById("multiplos").textContent = resultado;
    }
