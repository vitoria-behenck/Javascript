module.exports = {
  verificarLogin: (login, senha) => {
    let faixaEtaria;

    if (login === "Jean" && senha === "029") {
        acesso = "Acesso Permitido";
    
    } else {
      acesso = "Acesso Negado";
    }

    return `Olá, ${login}! ${acesso}`;
  }
};
