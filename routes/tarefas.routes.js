const express = require('express');
const TarefasController = require('.././controller/tarefas.controller')

const router = express.Router();

const tarefasController = new TarefasController();

//[GET]
router.get('/', tarefasController.getTarefas);

router.get('/:id', tarefasController.getTarefasById);
//[POST]
router.post('/add',tarefasController.createTarefa);

//[PUT]
router.put('/:id/edit', tarefasController.editTarefa);
//[DELETE]
router.delete('/delete/:id', tarefasController.deleteTarefa);

module.exports = router;