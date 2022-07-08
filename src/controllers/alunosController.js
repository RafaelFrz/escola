const service = require('../services/alunosService');

const getAllAlunos = async (req, res) => {
    try {
        const response = await service.getAllAlunos();
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAlunosById = async (req, res) => {
    try {
        const response = await service.getAlunosById(req.params);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const persistirAluno = async (req, res) => {
    try {
        const response = await service.persistirAluno(req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(404).send(error);
    }
}

const deleteAlunos = async (req, res) => {
    try {
        let deletado = await service.deleteAlunos(req.params);
        let response = deletado
        ? `Registro ${req.params.id} deletado com sucesso`
        : `Não foi encontrado nenhum registro com o id ${req.params.id} para ser deletado`;
    res.status(200).send({ response });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.getAllAlunos = getAllAlunos;
module.exports.getAlunosById = getAlunosById;
module.exports.persistirAluno = persistirAluno;
module.exports.deleteAlunos = deleteAlunos;