const service = require('../services/pessoasService');

const getAllPessoas = async (req, res) => {
    try {
        const response = await service.getAllPessoas();
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getPessoasById = async (req, res) => {
    try {
        const response = await service.getPessoasById(req.params);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const persistirPessoas = async (req, res) => {
    try {
        const response = await service.persistirPessoas(req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deletePessoas = async (req, res) => {
    try {
        let deletado = await service.deletePessoas(req.params);
        let response = deletado
        ? `Registro ${req.params.id} deletado com sucesso`
        : `Não foi encontrado nenhum registro com o id ${req.params.id} para ser deletado`;
    res.status(200).send({ response });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllPessoas = getAllPessoas;
module.exports.getPessoasById = getPessoasById;
module.exports.persistirPessoas = persistirPessoas;
module.exports.deletePessoas = deletePessoas;