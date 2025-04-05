document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões "Ler mais"
    const botoes = document.querySelectorAll(".lerMais");

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            // Encontra a div .mais mais próxima deste botão
            const conteudo = this.nextElementSibling;

            // Alterna a classe "hidden" para mostrar ou ocultar o conteúdo
            if (conteudo) {
                conteudo.classList.toggle("hidden");
                this.textContent = conteudo.classList.contains("hidden") ? "Ler mais" : "Ler menos";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".link");

    links.forEach(link => {
        link.addEventListener("click", function () {
            const url = this.getAttribute("data-url");
            window.location.href = url;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop) {
                document.title = "Consoles Retro - " + section.querySelector("h2").textContent;
            }
        });
    });
});
function highlightText() {
    let input = document.getElementById("searchInput").value.trim().toLowerCase();
    let sections = document.querySelectorAll("h2, li"); // Busca em <h2> e <li>
    
    // Remover marcações antigas
    sections.forEach(section => {
        section.innerHTML = section.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, "$1");
    });

    if (input === "") return; // Se o input estiver vazio, não faz nada

    let foundElement = null;

    sections.forEach(section => {
        let text = section.textContent.toLowerCase();
        if (text.includes(input)) {
            let regex = new RegExp(`(${input})`, "gi"); // Cria regex para destacar
            section.innerHTML = section.innerHTML.replace(regex, '<span class="highlight">$1</span>');

            if (!foundElement) {
                foundElement = section; // Captura a primeira ocorrência
            }
        }
    });
    // Se encontrou a palavra, rola até ela
    if (foundElement) {
        foundElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Evento de envio do formulário
    document.getElementById('consoleForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const userName = document.getElementById('userName').value;
        const consoleName = document.getElementById('consoleName').value;
        const gamingHours = document.getElementById('gamingHours').value;
        const gameGenre = document.getElementById('gameGenre').value;

        // Criando a mensagem de alerta formatada
        const alertMessage = `✅ Respostas Enviadas:\n
👤 Nome do Usuário: ${userName}\n
🎮 Console Favorito: ${consoleName}\n
⏳ Horas de Jogo por Semana: ${gamingHours}\n
🕹️ Gênero de Jogo Preferido: ${gameGenre}`;

        // Exibir alerta com as informações preenchidas
        alert(alertMessage);

        // Exibir as respostas na página
        const responseDiv = document.getElementById('response');
        responseDiv.innerHTML = `
            <h2>Respostas Enviadas:</h2>
            <p><strong>Nome do Usuário:</strong> ${userName}</p>
            <p><strong>Console Favorito:</strong> ${consoleName}</p>
            <p><strong>Horas de Jogo por Semana:</strong> ${gamingHours}</p>
            <p><strong>Gênero de Jogo Preferido:</strong> ${gameGenre}</p>
        `;
    });
});
    // Eventos dos botões e input
    document.getElementById("btnClick").addEventListener("click", function () {
        alert("Botão clicado!");
    });

    document.getElementById("btnHover").addEventListener("mouseover", function () {
        alert("Mouse passou sobre o botão!");
    });

    document.getElementById("btnDoubleClick").addEventListener("dblclick", function () {
        alert("Botão foi clicado duas vezes!");
    });

    document.getElementById("inputField").addEventListener("input", function () {
        alert("Texto alterado: " + this.value);
        
        // Perde o foco do campo de entrada
        this.blur();
    });

    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });
    });
    function searchSections() {
        let searchTerm = document.getElementById("searchBar").value.toLowerCase();
        let sections = document.querySelectorAll("section"); // Ou divs com classes específicas
    
        sections.forEach(section => {
            let text = section.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                section.style.display = "block"; // Mostra as seções que contêm o termo
            } else {
                section.style.display = "none"; // Esconde as seções que não contêm o termo
            }
        });
    }
  