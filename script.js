// Função para garantir que o usuário digite um número válido (Validação com while)
function pedirNumero(mensagem) {
    let input = prompt(mensagem);
    while (input === null || input.trim() === "" || isNaN(Number(input))) {
        input = prompt("Valor inválido. Digite apenas números:\n" + mensagem);
    }
    return Number(input);
}

// 1. Dados Iniciais
let nome = prompt("Digite seu nome:");
let renda = pedirNumero("Digite sua renda mensal:");
let qtdDespesas = pedirNumero("Quantas despesas deseja informar? (1 a 5)");

// Regra de limite de despesas
if (qtdDespesas < 1) qtdDespesas = 1;
if (qtdDespesas > 5) qtdDespesas = 5;

// 3. Lançamento com for
let totalDespesas = 0;
for (let i = 1; i <= qtdDespesas; i++) {
    totalDespesas += pedirNumero(`Digite o valor da Despesa ${i}:`);
}

// 4. Análise de orçamento com if/else
let mensagem = "";
let sobra = renda - totalDespesas;

if (totalDespesas > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= (renda * 0.3)) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}

// 5. Saída formatada com duas casas decimais
let relatorio = `Nome: ${nome}\n` +
                `Renda: R$ ${renda.toFixed(2)}\n` +
                `Total de Despesas: R$ ${totalDespesas.toFixed(2)}\n` +
                `Sobra: R$ ${sobra.toFixed(2)}\n` +
                `Classificação: ${mensagem}`;

alert(relatorio);
console.log(relatorio);