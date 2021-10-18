const express = require('express');
const cors = require('cors');

const AppRoutes = require('./routes/tarefas.routes')
const Conn = require('./conn/conn')

const app = express();
app.use(express.json());
app.use(cors());

Conn();

app.use('/priori', AppRoutes);

const port = 3005;
app.listen(port, () => console.log(`App rodando em  htttp://localhost:${port}/`))