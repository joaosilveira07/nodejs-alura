import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js"; 

// arquitetura MVC (model-view-controller)

class LivroController{
    static async listarLivros(req, res){ // static serve para poder usar o método sem precisar instanciar a classe
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);

        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livro = await livro.findById(id);
            res.status(200).json({message: "livro encontrado!", livro});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição do livro`})
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;

        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}}; // ... basicamente está "copiando" os elementos de um objeto para
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: "livro criado com sucesso!", livro: livroCriado});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`});
        }
    }

    static async atualizarLivro(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro atualizado"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro na atualização`});
        }
    }

    static async deletarLivro(req, res) {
        try {
            await livro.findByIdAndDelete(req.params.id);
            res.status(200).json({message: "livro deletado"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro generico pra delete`});
        }
    }

    static async listarLivrosPorEditora(req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({editora: editora});
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro generico pra busca`});
        }
    }
};

export default LivroController;
