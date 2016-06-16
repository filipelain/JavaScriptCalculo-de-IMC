

function percorre(listaPacientes)
{
    for (var atual = 0; atual <= listaPacientes.length - 1; atual++)
    {
        var pacienteAtual = listaPacientes[atual];
        console.log("valor atual --> " + atual);
        var paciente = mPaciente(pacienteAtual);
        var imc = paciente.cauculaImc();
        console.log(imc);
    }
}
function mPaciente(pacienteAtual)
{

    var nomeAtual = pacienteAtual.getElementsByClassName("info-nome")[0];
    var pesoAtual = pacienteAtual.getElementsByClassName("info-peso")[0];
    var alturaAtual = pacienteAtual.getElementsByClassName("info-altura")[0];
    var imcAtual = pacienteAtual.getElementsByClassName("info-imc")[0];
    var paciente = {
        nome: nomeAtual.textContent,
        peso: pesoAtual.textContent,
        altura: alturaAtual.textContent,
        cauculaImc: function () {
            if (this.altura != 0) {
                var imc = this.peso / (this.altura * this.altura);
                return imcAtual.textContent = imc;
            } else {
                console.log("Não posso executar uma divisão por 0!");
            }

        }
    }
    return paciente;
}

var button = document.getElementById("calcula-imcs");
button.addEventListener("click", function () {
    var listaPacientes = document.getElementsByClassName("paciente");
    percorre(listaPacientes);
});



var button2 = document.getElementById("adicionar-paciente");
button2.addEventListener("click", function () {
    
     event.preventDefault()
    var tabela = document.querySelector("table");

    var nome = document.querySelector("#campo-nome");
    var peso = document.querySelector("#campo-peso");
    var altura = document.querySelector("#campo-altura");

    var novopaciente = "<tr class='paciente'>" +
            "<td class='info-nome'>"+nome.value+"</td>" +
            "<td class='info-peso'>"+peso.value+"</td>" +
            "<td class='info-altura'>"+altura.value+"</td>" +
            "<td class='info-imc' ></td></tr>";
    tabela.innerHTML = tabela.innerHTML + novopaciente;

});



