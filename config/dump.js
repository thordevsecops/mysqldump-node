const { all } = require("bluebird")
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

class dumpbase{

// Using template strings to generate MySQL dump    
    async basedump(database) {
        let cmd = `mysqldump --single-transaction --column-statistics=0 -h ${process.env.DB_HOST} -P ${process.env.DB_PORT} -u ${process.env.DB_USER} -p${process.env.DB_PASSWORD} ${database}  > ${database}.sql`;
        const { stdout, stderr } =  exec(cmd);
        console.log('stdout:', stdout);
        console.error('stderr:', stderr);
    
        return 'sucesso'
    
    }
    
}


module.exports = new dumpbase();