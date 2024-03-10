
// Função para enviar o arquivo para o back-end 
function enviar_arquivo(eventoSubmit)
{
    // document é uma propriedade global do HTML, aqui estamos pegando o texto_elemento
    // do id "arquivo".
    var input=document.getElementById("arquivo");
    // Aqui estamos pegando o input na posoção 0, que seria o primeiro arquivo.
    var file=input.files[0];
    
    // Criação do body do tipo FormData para request.
    const formData = new FormData();
    formData.append("arquivo", file);

    try {
        //fetch é uma função global do js para executar o request.
        fetch('http://127.0.0.1:8000/uploadfile', {
            method: "POST",
            body: formData,
        // Primeiro .then é para formatar o retorno.
        }).then(function(response) {
            return response.json();
        // Segundo .then é para pegar o retorno.
        }).then(function(response) {
            console.log(response)
        });
            
    } catch (e) {
        console.error(e);
    }
    
    eventoSubmit.preventDefault();
}

var form=document.getElementById("idFormulario");
// Executar o evento do tipo "submit"
form.addEventListener("submit", enviar_arquivo);

function executarRequest()
{
    try {
        fetch('http://127.0.0.1:8000/retornartexto',{
            method: "GET",
        }).then(function(response) {
            return response.json();
        }).then(function(response) {
            var texto_elemento=document.getElementById("textoRequest");
            texto_elemento.textContent=response;
            console.log(response)
        })
    } catch (e) {
        console.error(e)
    }    
}
