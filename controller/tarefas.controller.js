const mongoose = require('mongoose');

const TarefasServices = require('./../services/tarefas.service')

const tarefasService = new TarefasServices();

class TarefasController {

    getTarefas = async (req,res)=>{
        const tarefas = await tarefasService.findAll();
        res.send(tarefas);
    }

    getTarefasById = async (req,res) => {
        const id = req.params.id;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            res.status(403).send({ message: 'id Invalido'});
            return;
        }
        const tarefa = await tarefasService.findById(id);

        if(!tarefa) {
            res.status(404).send({ message: 'registro não encontrado'});
            return
        }

        res.status(200).send(tarefa);
    }

    createTarefa = async (req, res) => {
        const tarefa = req.body;
        const tarefaSalva = await tarefasService.createTarefa(tarefa).then(() => {
            res.send({message: 'nova tarefa registrada com sucesso'});
        }).catch((err) => res.status(500).send({error: `erro no servidor: ${err}`}));
    }
    editTarefa = async (req, res) => {
        const id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            res.status(403).send({message: 'id Invalido'});
            return;
        }
        const tarefa = req.body;
        await tarefasService.editTarefa(id, tarefa)
        .then(() => {
            res.status(200).send({message: 'Tarefa atualizada'})
        })
        .catch((err) => res.status(500).send({error: `erro no servidor${err}`}))
    }

    deleteTarefa = async (req, res) => {
        const id = req.params.id;
        await tarefasService.deleteTarefa(id)
        .then(() => res.status(200).send({message: 'Entrada excluída!'}));
    }


}


module.exports = TarefasController;