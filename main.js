// function Enviar() {

//     let nome = document.getElementById("nomesobrenome");
//     let data = document.getElementById("dt");
//     console.log("Data do input = " + data.value);
//     const maioridade = 568036800000;
//     data = new Date(data.value);
//     console.log("Data do input = " + data);
//     const dataAtual = new Date();
//     console.log("Data dataAtual = " + dataAtual);
//     let idade = Math.floor (dataAtual - data);
//     console.log("idade = " + idade);

//     if (idade <= maioridade) {
//         alert('Obrigado sr(a) ' + nome.value + ' mas você é de menor.');
//     }else if (nome.value != "") {
//         alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
//     }

// }
function VerificarIdade() {
    let data = document.getElementById("dt").value;
    let niver = new Date(data);
    let dataAtual = new Date();
    let idade = dataAtual.getFullYear() - niver.getFullYear();
    let mes = dataAtual.getMonth() - niver.getMonth();
    
    if (mes < 0 || (mes === 0 && dataAtual.getDate() < niver.getDate())) {
        idade--;
    }

    const responsavel = document.getElementById('responsavel');
    if (idade < 18) {
        responsavel.style.display = 'block';
    } else {
        responsavel.style.display = 'none';
    }
}
document.getElementById('cadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implementar lógica para processar o formulário
    alert('Formulário enviado com sucesso!');
});