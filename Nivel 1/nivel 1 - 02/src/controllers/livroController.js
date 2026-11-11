import livro from "../models/Livro.js"; 

// arquitetura MVC (model-view-controller)

class LivroController{
    static async listarLivros(req, res){ // static serve para poder usar o método sem precisar instanciar a classe
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);

        } catch (erro) {
            res.status(500).json({mensagem: `${erro.mensagem} - falha na requisição`});
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livro = await livro.findById(id);
            res.status(200).json({mensagem: "livro encontrado!", livro});
        } catch (erro) {
            res.status(500).json({mensagem: `${erro.mensagem} - falha na requisição do livro`})
        }
    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);

            res.status(201).json({mensagem: "livro criado com sucesso!", livro: novoLivro});
        } catch (erro) {
            res.status(500).json({mensagem: `${erro.mensagem} - falha ao cadastrar livro`});
        }
    }

    static async atualizarLivro(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({mensagem: "livro atualizado"});
        } catch (erro) {
            res.status(500).json({mensagem: `${erro.mensagem} - erro na atualização`});
        }
    }

    static async deletarLivro(req, res) {
        try {
            await livro.findByIdAndDelete(req.params.id);
            res.status(200).json({mensagem: "livro deletado"});
        } catch (erro) {
            res.status(500).json({mensagem: `${erro.mensagem} - erro generico pra delete`});
        }
    }
};

export default LivroController;
