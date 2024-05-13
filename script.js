
function Valores(){
    let numeroUm = 0;
    let numeroDois=0;
    let diferente=0;
    let dobro =0;
    let triplo=0;
    let soma = 0;
    let multiplicacao=0;
    numeroUm = Number(window.prompt(`Digite o primeiro número`));
    numeroDois= Number(window.prompt(`Digite o segundo número número`));
    diferente = (numeroUm - numeroDois);
    window.alert(`A diferença entre as variaveis é: ${diferente}`)
    dobro = numeroUm*2;
    triplo= numeroDois*3;
    soma = dobro+ triplo;
    window.alert(`A soma do dobro da variavel um e do triplo da variavel 2 é ${soma}`)
    multiplicacao= numeroUm*numeroDois;
    window.alert(`A multiplicação das duas variaveis é ${multiplicacao}`)
    if (numeroUm > numeroDois){
        console.log(`${numeroUm} ${numeroDois}`)
    }
    else{
        console.log(`${numeroDois} ${numeroUm}`)
    }
}

function Pagamento(){
   let bruto=0;
   let desconto=0;
   let liquido=0;
   let nome = window.prompt(`Digite o nome do funcionario`)
   bruto = parseFloat(window.prompt(`Digite o salário bruto`))
   desconto= bruto*0.08;
   liquido= bruto-desconto;
   console.log(`O nome do funcionario ${nome}`)
   console.log(`O salario bruto é de ${bruto}`)
   console.log(`O valor do desconto ${desconto}`)
   console.log(`O salario liquido é de ${liquido}`)
}

function CLT(){
   let bruto=0;
   let desconto=0;
   let liquido=0;
   let nome = window.prompt(`Digite o nome do funcionario`)
   bruto = parseFloat(window.prompt(`Digite o salário bruto`))
   if(bruto<= 1000){
    desconto= bruto*0.08;
    liquido= bruto- desconto;
    console.log(`O nome do funcionario é ${nome}`)
    console.log(`O salario liquido é de ${liquido}; sua taxa de desconto foi de 8% e logo seu desconto foi de ${desconto} `)
   }
   else if(bruto<=1500){
    desconto= bruto*0.085;
    liquido= bruto- desconto;
    console.log(`O nome do funcionario é ${nome}`)
    console.log(`O salario liquido é de ${liquido}; sua taxa de desconto foi de 8.5% e logo seu desconto foi de ${desconto} `)
   }
   else{
    desconto= bruto*0.09;
    liquido= bruto- desconto;
    console.log(`O nome do funcionario é ${nome}`)
    console.log(`O salario liquido é de ${liquido}; sua taxa de desconto foi de 9% e logo seu desconto foi de ${desconto} `)
   }
}