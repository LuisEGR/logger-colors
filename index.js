'use strict';

const moment = require('moment');
const center = require('center-align');
const fs = require('fs');


module.exports = class Logger {
    constructor(options) {
        this.defaultOptions = {
            writeToFile: false,
            dirLogs: '/logs',
            extensionLogFile: 'txt',
            timeUTCOffset: null,
            timeFormat: null,
            centerColumns: 50,
            createDirIfNotExists: true,
            fileName: 'logs',
        };
        this.options = {
            ...this.defaultOptions,
            ...options
        };

        this.c_gray = '\x1b[90m';
        this.c_red = '\x1b[91m';
        this.c_green = '\x1b[32m';
        this.c_yellow = '\x1b[33m';
        this.c_magenta = '\x1b[95m';
        this.c_cyan = '\x1b[36m';
        this.c_white = '\x1b[37m';
        this.c_default = '\x1b[0m';
    }

    info(text, _center) {
        this.write(this.createLog(this.c_gray, text, _center));
    }

    error(text, _center) {
        this.write(this.createLog(this.c_red, text, _center));
    }

    success(text, _center) {
        this.write(this.createLog(this.c_green, text, _center));
    }

    warn(text, _center) {
        this.write(this.createLog(this.c_yellow, text, _center));
    }

    cyan(text, _center) {
        this.write(this.createLog(this.c_cyan, text, _center));
    }

    magenta(text, _center) {
        this.write(this.createLog(this.c_magenta, text, _center));
    }


    createLog(color, text, _center) {
        let t = ' '+text;
        if(_center) {
            t = center(text, this.options.centerColumns);
        }
        return [
            this.getTime(),
            color,
            t,
            this.c_default
        ].join('');
    }

    write(text) {
        // console.log('text:', text);
        console.log.apply(console, [text]);
        this.writeToFile(text);
    }

    writeToFile(text) {
        if(!this.options.writeToFile) return;
        let logStr = text + '\n';

        let fileName = this.options.fileName + '.' + this.options.extensionLogFile

        if (!fs.existsSync(this.options.dirLogs)) {
            if (this.options.createDirIfNotExists) {
                fs.mkdirSync(this.options.dirLogs);
            }
        }

        let fdir = this.options.dirLogs + '/' + fileName;
        fs.appendFileSync(fdir, logStr);
    }

    getTime() {
        let f = this.options.timeFormat || 'DD-MM-YYYY HH:mm:ss.SSS';
        let u = this.options.timeUTCOffset || '-0000';
        return this.c_gray + '[' + moment()
            .utcOffset(u)
            .format(f) + ']' + this.c_default;
    }

}