/*
    O que é um middleware?
    R: São funções que interceptam alguma req que é feita para nossa api.
    Neste caso aqui, o middleware está interceptando o erro, para tratar ela da maneira mais correta possível.
*/
import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next){
    if (erro instanceof mongoose.Error.CastError){
		res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos"});
	} else if (erro instanceof mongoose.Error.ValidationError){
        const mensagensErro = Object.values(erro.erros)
            .map(erro => erro.message)
            .join("; ");

        res.status(400).send({message: `Os seguintes erros foram encontrados: ${mensagensErro}`});
    } else {
		res.status(500).send({message: "Erro interno do servidor"});
	}
}

export default manipuladorDeErros;
