const mongoose = require('mongoose');

const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/priori',
    {useNewUrlParser: true,
    useUnifiedTopology: true,}
    )
.then(() => console.log('MongoDB conectado'))
.catch((err)=> console.log('Erro na conexão com o banco de dados', err))
}

module.exports = Conn;