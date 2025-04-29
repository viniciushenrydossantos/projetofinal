// Alterna entre modo claro e escuro
document.getElementById('dark-mode').addEventListener('click', () => {
    document.body.classList.add('dark-mode');  // Ativa o modo escuro
});

document.getElementById('light-mode').addEventListener('click', () => {
    document.body.classList.remove('dark-mode');  // Ativa o modo claro
});
