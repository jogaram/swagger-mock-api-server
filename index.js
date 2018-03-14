#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const command = require('yargs')
    .command(['* [options]', 'serve [options]'], 'Start mock server',
        (yargs) => {
            yargs
                .option('port', {
                    describe: 'port to bind on',
                    default: 8000
                })
                .option('host', {
                    describe: 'Server host',
                    default: '0.0.0.0'
                })
                .option('file', {
                    describe: 'Swagger file',
                    default: 'swagger.json'
                })
                .option('verbose', {
                    alias: 'v',
                    default: false
                })
                .coerce('file', function(arg) {
                    let filePath = path.normalize(path.join(process.cwd(), arg || 'swagger.json'));

                    if (!fs.existsSync(filePath)) {
                        console.error(`File ${filePath} does not exist`);
                        this.help()
                        process.exit(1);
                    }

                    return filePath
                })
        },
        command => {
            console.info(`Starting mock server on ${command.host}:${command.port} with swagger file ${command.file}`);
            require('./serve').serve(command.host, command.port, command.file);
        }
    )
    .demandCommand(1, 'Specify command to run')
    .help()
    .showHelpOnFail(true)
    .argv;