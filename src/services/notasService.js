const db = require('../config/db')

const getAllAlunos = async () => {
    let sql = 'select * from notas';
    let notas = await db.query(sql);
    return notas.rows;
}

const getNotasById = async (params) => {
    let sql = `select * from notas where id = $1`;
    let notas = await db.query(sql, [params.id]);
    return notas.rows;
}

const persistirNota = async (params) => {
    if (!params.id) {
        let sql = 'INSERT INTO public.notas(nota, peso, id_disciplina, id_aluno, observacao, datahora) VALUES ($1, $2, $3, $4, $5, $6) returning id;'
        const { nota, peso, id_disciplina, id_aluno, observacao, datahora } = params;
        const query = await db.query(sql, [nota, peso, id_disciplina, id_aluno, observacao, datahora])
    
        return { type: 'info', msg: 'Registro incluído com sucesso!', data: { id: query.rows[0].id } };
    }

    let fields = [];

    Object.keys(params).forEach(e => {
        if (e !== 'id') {
            if (params[e] === '' || params[e] == null) {
                fields.push(`${e} = null`);
            } else {
                fields.push(`${e} = '${params[e]}'`)
            }
        }
    });
    fields = fields.join(', ');
    const sql = `update notas set ${fields} where id = ${params.id}`;

    const response = await db.query(sql);
    const msg = response.rowCount === 0
        ? `Não foi encontrado nenh7um registro com id ${params.id}`
        : `Registro ${params.id} alterado com sucesso!`;

    return { type: 'info', msg};
}

const deleteNota = async (params) => {
    let sql = 'delete from notas where id = $1';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}

module.exports.getAllAlunos = getAllAlunos;
module.exports.getNotasById = getNotasById;
module.exports.persistirNota = persistirNota;
module.exports.deleteNota = deleteNota;