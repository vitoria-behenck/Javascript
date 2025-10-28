const produtosModel = require('../models/produtosModel');
const { produtos } = require('./siteController');

module.exports = {
  produtos: (req, res) => {
    res.sendFile("produtos.html", { root: './views' });
  },
  camisetas : (req, res) => {
    res.sendFile("camisetas.html", { root: './views' });
  },
  formCadastrar: (req, res) => {
    res.sendFile("formCadastrar.html", { root: './views' });
  },
  cadastrar : (req, res) => {
    const { id, descricao, quantidade, valor_unitario } = req.body;
    const mensagem = produtosModel.cadastrar(id, descricao, quantidade, valor_unitario);
    res.send(`<h1>${mensagem}</h1>`);
  }
};