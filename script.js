document.addEventListener("DOMContentLoaded", function() {
    const nomeTexto = "Olá, eu sou a Maria Dutra";

    let nomeIndex = 0;
    let descricaoIndex = 0;
    
    const nomeElemento = document.getElementById("nome");
    const descricaoElemento = document.getElementById("descricao");

    function escreverNome() {
        if (nomeIndex < nomeTexto.length) {
            nomeElemento.innerHTML += nomeTexto.charAt(nomeIndex);
            nomeIndex++;
            setTimeout(escreverNome, 100);
        } else {
            escreverDescricao(); // Inicia a segunda animação após terminar a primeira
        }
    }

    function escreverDescricao() {
        if (descricaoIndex < descricaoTexto.length) {
            descricaoElemento.innerHTML += descricaoTexto.charAt(descricaoIndex);
            descricaoIndex++;
            setTimeout(escreverDescricao, 50);
        }
    }

    escreverNome();
});
