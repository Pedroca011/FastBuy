document.addEventListener('DOMContentLoaded', function() {
    // Seu código JavaScript aqui
    document.getElementById('Inicio').addEventListener('click', function() {
        scrollToTop();
    });

    // Função para rolar suavemente para o topo da página
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Isso faz a rolagem ser suave
        });
    } 
});



