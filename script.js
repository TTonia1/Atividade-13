
function calcular(){
    const numeroA = document.getElementById('numeroA').value;
    const numeroB = document.getElementById('numeroB').value;
    const operacao = document.getElementById('operacao').value;
    var resultado;
    switch (operacao) {
        case 'soma':
            resultado = numeroA + numeroB;
            break;
        case 'subtracao':
            result = numeroA - numeroB;
            break;
        case 'vezes':
            result = num1 * num2;
            break;
        case 'dividido':
            result = num1 / num2;
            break;
        default:
            result = 'Operação Inválida';
            break;
    }
    document.getElementById('resultado').textContent = resultado;
}