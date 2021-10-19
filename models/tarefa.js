const mongoose = require('mongoose');

const TarefaModel = new mongoose.Schema({
    titulo: { type: String, required: true },
    detalhes: {type: String, required: false},
    prioridade: {type: String, required: true},
    prazo:{type: Date, required: true},
    status: {type:String, required: true},
    createdAt: {type: Date, default: Date.now},

})

const Tarefa = mongoose.model("Tarefa", TarefaModel);

module.exports = Tarefa;
