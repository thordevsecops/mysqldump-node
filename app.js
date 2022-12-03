// Import library to read .env files in project
const execDump = require(`./config/dump`)
const appRoot = require('app-root-path');
require('dotenv').config({path: `${appRoot}/.env`});

// Necessary library to working project and export to S3 Bucket
const { createReadStream, createWriteStream } = require("fs");
const { createGzip } = require("zlib");
const spawn = require('child_process').spawn;
const path = require('path');
const fs = require('fs');
const os = require('os');
const Promise = require('bluebird');
const router = require('express-promise-router')
const util = require('util');
const moment = require('moment');
const zlib = require('zlib');

// Obtain all schemas present in the RDS Server and backup them
(async ()=>{
    const db = require(`${appRoot}/config/db`);
    console.log('Obtain all databases name from dump')
    const databases = await db.allDatabases()
//    console.log(databases)
    let response = '';
    let databaseName = '';

    for (i = 0; i < databases.length; i++) {
        databaseName = databases[i].Database;
         if (databaseName == 'database'){
            response = await execDump.basedump(databaseName);
            console.log(response)
            let filePath = './' + databaseName + '.sql';
            console.log(filePath)

            const compressFile = (filePath) => {
                const stream = createReadStream(filePath);
                stream
                    .pipe(createGzip())
                    .pipe(createWriteStream(`${filePath}.gz`))
                    .on("finish", () =>
                        console.log(`sucesso ${filePath}`)
                    );
            };
        }

    }

})()