const controller = require('../controllers/notasController');

module.exports = (app) => {
    app.get('/notas', controller.getAllNotas);
    app.get('/notas/:id', controller.getNotasById);
    app.post('/notas', controller.persistirNota);
    app.delete('/notas/:id', controller.deleteNota);
}