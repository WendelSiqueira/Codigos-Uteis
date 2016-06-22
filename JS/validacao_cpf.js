// Recebe uma string como parametro podendo conter ou não pontos e traços e retorna se o cpf é valido ou não
function validate_cpf(value){
    value = value.replace(/\./g, "");
    value = value.replace(/\-/g, "");
    var cpf_array = value.split("");
    if (cpf_array.length != 11){
      return false;
    }
    var aux = 0;
    for (var index = 0; index < 9; index++){
      aux += (10 - index) * parseInt(cpf_array[index]);
    }
    var first_digit = 11 - (aux % 11);
    if(first_digit > 9){
      first_digit = 0
    }
    if (cpf_array[9] != first_digit){
            return false
    }
    aux = 0
    for (var index = 0; index < 10; index++){
      aux += (11 - index) * parseInt(cpf_array[index]);
    }
    var second_digit = 11 - (aux % 11);
    if(second_digit > 9){
      second_digit = 0
    }
    if (cpf_array[10] != second_digit){
      return false
    }
    return true;
}
