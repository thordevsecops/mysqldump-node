async function connection() {
    if (global.conexao && global.conexao.state != 'disconected')
        return global.conexao;
    const mysql = require('mysql2/promise');
    const con = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });
    console.log('Connection estabilished');
    global.conexao = con;
    return con;
}

const allDatabases = async()=>{
    const con= await connection()
    const [databases] = await con.query('SHOW DATABASES')
    return await databases
}

connection()

module.exports = {allDatabases}