import http from "http";

const PORT = 3000;

const router = {
    "/": "Curso de ExpressAPI e Node.Js",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(router[req.url]);
});

server.listen(PORT, () => {
    console.log("Servidor ativo na porta 3000!");
});

