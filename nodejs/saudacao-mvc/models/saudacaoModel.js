module.exports = {
  gerarMensagemPersonalizada: (nome, idade, lane) => {
    let faixaEtaria;

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else if (idade < 60) {
      faixaEtaria = "adulto";
    } else {
      faixaEtaria = "idoso";
    }

    return `Olá, ${nome}! Você é um(a) ${faixaEtaria} e a lane que você joga é ${lane}.`;
  }
};
