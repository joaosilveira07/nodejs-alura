import "dotenv/config";
// import http from "http"; ANTES DO EXPRESS
import app from "./src/app.js";

const PORT = 3000;

// const router = {
//     "/": "Curso de ExpressAPI e Node.Js",
//     "/livros": "Entrei na rota livros",
//     "/autores": "Entrei na rota autores"
// }; ANTES DO EXPRESS

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(router[req.url]);
// }); ANTES DO EXPRESS

app.listen(PORT, () => {
    console.log("Servidor ativo na porta 3000!");
});

