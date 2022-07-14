confirm(`Digite dois número e veja quais são os pares entre eles:`);

var num1 = Number(prompt('Digite um número'));

var num2 = Number(prompt('Digite um segundo número'));

confirm('Veja o resultado no console(aperte F12)');

if (num1 <= num2)

while (num1 <= num2) {

    if (num1 % 2 === 0) {
    console.log(num1);
    }

    num1++;
} else {

while (num1 >= num2) {

    if (num1 % 2 === 0) {
        console.log(num1)
    }

    num1--;
}
}