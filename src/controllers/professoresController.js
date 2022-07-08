const service = require('../services/professoresService');

const getAllProfessores = async (req, res) => {
    try {
        const response = await service.getAllProfessores();
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getProfessoresById = async (req, res) => {
    try {
        const response = await service.getProfessoresById(req.params);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const persistirProfessor = async (req, res) => {
    try {
        const response = await service.persistirProfessor(req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteProfessor = async (req, res) => {
    try {
        let deletado = await service.deleteProfessor(req.params);
        let response = deletado
        ? `Registro ${req.params.id} deletado com sucesso`
        : `Não foi encontrado nenhum registro com o id ${req.params.id} para ser deletado`;
    res.status(200).send({ response });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllProfessores = getAllProfessores;
module.exports.getProfessoresById = getProfessoresById;
module.exports.persistirProfessor = persistirProfessor;
module.exports.deleteProfessor = deleteProfessor;