function fizzBuzz(numero: number): string | number {

    if (numero % 5 === 0 && numero % 3 === 0) { 
        return "FizzBuzz";
    } 
    else if (numero % 5 === 0) { 
        return "Buzz";
    } 
    else if (numero % 3 === 0) { 
        return "Fizz";
    } 
    else { 
        return numero.toString(); //transforma o número em string
    }
}
module.exports = fizzBuzz;