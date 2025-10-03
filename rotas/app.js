import http from "http";

const PORT = 3000;

//Cria o servidor
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    //Define o cabeçalho da resposta como HTML
    response.setHeader("Content-Type", "text/html; charset=utf-8");

    if (url === "/" ) {
        response.statusCode = 200;
        response.end("<h1>Página Inicial</h1>");
    } else if (url === "/sobre" && method === "GET") {
        response.statusCode = 200;
        response.end(
            "<h1>Sobre Nós</h1><p>Esta é uma aplicação de exemplo com Node.js puro</p>"
        );
    } else if (url === "/contato") {
        response.statusCode = 200;
        response.end("<h1>Fale Conosco</h1>");

    } else if (url === "/fotos") {
        response.statusCode = 200;
        response.end("<h1>Fotos</h1>");

     } else if (url === "/imagens") {
        response.statusCode = 200;
        response.end("<h1>Imagens oficiais do nosso site</h1>");
        
    } else {
        //Se nenhuma rota corresponder
        response.statusCode = 404; //Not found
        response.end("<h1>404 - Página Não Encontrada</h1>");
    }

});

//Inicia o servidor na porta definida
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});