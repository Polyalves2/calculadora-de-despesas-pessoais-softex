let despesaPessoal = [];
function mostrarResumo() {
    if (despesaPessoal.length === 0) {
        alert('Não tem despesas para mostrar.');
        return;
    }

    const total = despesaPessoal.reduce((accumulator, despesa) => accumulator + despesa.valor, 0);
    const media = total / despesaPessoal.length;
    const maiorDespesa = despesaPessoal.length > 0 ? Math.max(despesaPessoal.map(desp => desp.valor)) : 0;
    
    let resumo = " Resumo das despesas \n";
    resumo += `Total de despesas: ${despesaPessoal.length}\n`;
    resumo += `Valor total: R$ ${total.toFixed(2)}\n`;
    resumo += `Valor médio: R$ ${media.toFixed(2)}\n`;
    resumo += `Maior despesa: R$ ${maiorDespesa.toFixed(2)}\n`;
    resumo += " Despesas em categorias \n";

    const emCategoria= {};
    despesaPessoal.forEach(despesa => {
        if (!emCategoria[despesa.categoria]) {
            emCategoria[despesa.categoria] = 0;
        }
        emCategoria[despesa.categoria] += despesa.valor;
    });

    for (const categoria in emCategoria) {
        resumo += `${categoria}: R$ ${emCategoria[categoria].toFixed(2)}\n`;
    }

    alert(resumo);
}

function limpardespesaPessoal() {
    if (despesaPessoal.length === 0) {
        alert('Não tem despesas para limpar.');
        return;
    }

    if (confirm('Tem certeza que deseja remover todas despesas ? Esta ação não pode ser desfeita, se for removida')) {
        despesaPessoal = [];
        alert('Todas despesas foram removidas.');
    }
}

let escolha;

do {
    escolha = prompt(
        " Despesas Pessoais \n\n" +
        "1. Adicione sua despesa\n" +
        "2. Ver resumo das despesas\n" +
        "3. Listar todas despesas\n" +
        "4. Limpar todas despesas\n" +
        "5. Sair do menu\n\n" +
        "Digite o número da opção que você deseja:"
    );

    switch (escolha) {
        case "1":
           const informeDespesa = prompt("Digite o valor da sua despesa:");
           const valor = parseFloat(informeDespesa);
           const categoria = prompt("Digite a categoria (alimentação, transporte, energia, internet):");

           if (categoria && !isNaN(valor) && valor > 0) {
               despesaPessoal.push({
                  valor: valor,
                  categoria: categoria,
               });
    alert("Sua despesa foi adicionada com sucesso!");
} else {
    alert("Informações inválidas. Sua despesa não foi adicionada.");
}
break;

case "2":
mostrarResumo();
break;

case "3":
if (despesaPessoal.length === 0) {
    alert("Não existem despesas cadastradas.");
} else {
    let listaDespesa = " Lista da despesa \n\n";
    despesaPessoal.forEach((despesa, index) => {
        listaDespesa += `${index ++}. Categoria: ${despesa.categoria} | Valor: R$ ${despesa.valor.toFixed(2)}\n`;
    });
    alert(listaDespesa);
}
break;

case "4":
limparDespesas();
break;

case "5":
alert("Saindo");
break;

case null:
alert("fechado.");
escolha = "5"; 
break;

default:
alert("Inválido. Digite o número de 1 a 5.");
}

} while (escolha !== "5");
