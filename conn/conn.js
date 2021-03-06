const mongoose = require('mongoose');

const Conn = (url, user, pass, data) => {
    mongoose.connect(`${url}/${data}`,
        {
            user: user, 
            pass: pass,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
        .then(() => console.log('MongoDB conectado'))
        .catch((err) => console.log('Erro na conexão com o banco de dados', err))
}

module.exports = Conn;