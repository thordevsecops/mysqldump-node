const { all } = require("bluebird")
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

class dumpbase{

    async basedump(database) {
        let cmd = `mysqldump --single-transaction --column-statistics=0 -h -P 3306 -u -p ${database}  > ${database}.sql`;
        const { stdout, stderr } =  exec(cmd);
        console.log('stdout:', stdout);
        console.error('stderr:', stderr);
    
        return 'sucesso'
    
    }
    
}


module.exports = new dumpbase();