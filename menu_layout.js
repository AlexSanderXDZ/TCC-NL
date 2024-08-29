document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#sidebar .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evita o comportamento padrão de navegação do link
            
            // Remove a classe 'active' de todos os itens
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Adiciona a classe 'active' ao item clicado
            link.classList.add('active');
        });
    });
});
