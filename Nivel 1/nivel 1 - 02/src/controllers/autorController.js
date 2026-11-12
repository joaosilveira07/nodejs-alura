import {autor} from "../models/Autor.js"; 

// arquitetura MVC (model-view-controller)

class AutorController{
    static async listarAutores(req, res){ // static serve para poder usar o método sem precisar instanciar a classe
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);

        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    }

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autor = await autor.findById(id);
            res.status(200).json({message: "autor encontrado!", autor});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição do livro`})
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);

            res.status(201).json({message: "autor criado com sucesso!", autor: novoAutor});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar autor`});
        }
    }

    static async atualizarAutor(req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "autor atualizado"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro na atualização`});
        }
    }

    static async deletarAutor(req, res) {
        try {
            await autor.findByIdAndDelete(req.params.id);
            res.status(200).json({message: "autor deletado"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro generico pra delete`});
        }
    }
};

export default AutorController;
