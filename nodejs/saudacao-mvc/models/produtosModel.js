module.exports = {
    cadastrar: (id, descricao, quantidade, valor_unitario) => {
        
        return `Produto cadastrado com sucesso! ID: ${id}, Descrição: ${descricao}, Quantidade: ${quantidade}, Valor Unitário: ${valor_unitario}`;
    }
};