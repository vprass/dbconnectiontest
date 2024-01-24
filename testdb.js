const sequelize = require('./configdb');

async function testarConexao() {
    try {
        await sequelize.authenticate();
        console.info('Conexão Bem Sucedida')
        await sequelize.close();
        console.info('Desconectado')
    } catch (error){
        console.error('Erro ao se conectar ao DB: ' + error);
    }
}

testarConexao();