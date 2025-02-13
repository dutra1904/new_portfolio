// Efeito de digitação no título
document.addEventListener("DOMContentLoaded", function () {
    const texto = "👋 Olá! Sou Maria Clara, estudante de Engenharia da Computação na UFG.";
    let i = 0;
    const elemento = document.getElementById("texto-animado");

    function escreverTexto() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escreverTexto, 50);
        }
    }

    escreverTexto();
});

// Animação de scroll para seções
window.addEventListener("scroll", function () {
    const elementos = document.querySelectorAll(".item, .habilidade");

    elementos.forEach((elemento) => {
        const posicao = elemento.getBoundingClientRect().top;
        const alturaTela = window.innerHeight * 0.85;

        if (posicao < alturaTela) {
            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";
        }
    });
});
