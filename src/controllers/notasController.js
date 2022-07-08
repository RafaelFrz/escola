const service = require('../services/notasService');

const getAllNotas = async (req, res) => {
    try {
        const response = await service.getAllNotas();
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getNotasById = async (req, res) => {
    try {
        const response = await service.getNotasById(req.params);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const persistirNota = async (req, res) => {
    try {
        const response = await service.persistirNota(req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteNota = async (req, res) => {
    try {
        let deletado = await service.deleteNota(req.params);
        let response = deletado
        ? `Registro ${req.params.id} deletado com sucesso`
        : `Não foi encontrado nenhum registro com o id ${req.params.id} para ser deletado`;
    res.status(200).send({ response });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllNotas = getAllNotas;
module.exports.getNotasById = getNotasById;
module.exports.persistirNota = persistirNota;
module.exports.deleteNota = deleteNota;