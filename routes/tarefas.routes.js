const express = require('express');
const TarefasController = require('.././controller/tarefas.controller')

const router = express.Router();

const tarefasController = new TarefasController();

//[GET]
router.get('/', tarefasController.getTarefas);

router.get('/:id', tarefasController.getTarefasById)
//[POST]
router.post('/add',tarefasController.createTarefa)

//[PUT]

//[DELETE]

module.exports = router;