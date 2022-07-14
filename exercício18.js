var num = Number(prompt('Escolha um número'));

var mult = 1;

while (mult <= 10) {
    console.log(`
        ${mult} x ${num} = ${num * mult}
    `)

    mult++;
}