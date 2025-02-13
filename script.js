document.addEventListener("DOMContentLoaded", function() {
    const nomeTexto = "👋🏾 Olá, eu sou a Maria Dutra ";
    const titulos = document.querySelectorAll(".titulo");
    const testeTexto = "👋 Olá! Sou Maria Clara, estudante de Engenharia da Computação na UFG.";

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

    function verificarScroll() {
        titulos.forEach((titulo) => {
            const posicao = titulo.getBoundingClientRect().top;
            const alturaTela = window.innerHeight * 0.8; // Ativa quando estiver 80% visível

            if (posicao < alturaTela) {
                titulo.style.opacity = "1";
                titulo.style.transform = "translateY(0)";
            }
        });
    }

    escreverNome();
    window.addEventListener("scroll", verificarScroll);
    verificarScroll();
});
