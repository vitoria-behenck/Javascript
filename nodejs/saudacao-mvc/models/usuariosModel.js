module.exports = {

    gerarMensagemLogin: (login, senha) => {
        let acesso;
        if (login === "Jean Moreau" && senha === "29") {
            acesso = "Login bem-sucedido!";
        } else {
            acesso = "Login falhou!";
        }
        return `Olá, ${login}! Seu acesso foi ${acesso}`;
    }
};