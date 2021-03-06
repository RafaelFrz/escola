const service = require('../services/disciplinasService');

const getAllDisciplinas = async (req, res) => {
    try {
        const response = await service.getAllDisciplinas();
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDisciplinasById = async (req, res) => {
    try {
        const response = await service.getDisciplinasById(req.params);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const persistirDisciplinas = async (req, res) => {
    try {
        const response = await service.persistirDisciplinas(req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteDisciplinas = async (req, res) => {
    try {
        let deletado = await service.deleteDisciplinas(req.params);
        let response = deletado
        ? `Registro ${req.params.id} deletado com sucesso`
        : `Não foi encontrado nenhum registro com o id ${req.params.id} para ser deletado`;
    res.status(200).send({ response });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllDisciplinas = getAllDisciplinas;
module.exports.getDisciplinasById = getDisciplinasById;
module.exports.persistirDisciplinas = persistirDisciplinas;
module.exports.deleteDisciplinas = deleteDisciplinas;