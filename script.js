function calcular(){

    var num1 = Number(document.getElementById("tdividendo").value);
    var num2 = Number(document.getElementById("tdivisor").value);

    var resultado1 = document.getElementById("tresultado");
    var msg = document.getElementById("msgerro");

    if(!isNaN(num1) && !isNaN(num2)) {

        resultado1.value = num1 / num2  
        msg.style.display = "none";
       
    }else{

      msg.innerHTML = '<div>Seu calculo nao pode ser feito com  letras</div>';
      msg.style.display = "block";
      resultado1.value = "";
      
        }



}
    


