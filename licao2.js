function dobrar(numero) {
  return numero * 2;
}


console.log(dobrar(5)); 


function triplicar(numero){
    return numero * 3 


}

console.log (triplicar(10)); 


function soma(numero) {

    return numero + 5


}

console.log (soma(20,5)); 

function multiplique(numero){

return numero * numero

}

console.log (multiplique(2,2))


function aumentarSalario(salario) {
    return salario * 1.10;
}

console.log(aumentarSalario(2000));

function numeros() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

numeros();

function somar() {
    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma = soma + i;
    }

    return soma;
}

console.log(somar());