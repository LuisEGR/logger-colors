import moment from 'moment-timezone';
import center from 'center-align';
import fs from 'fs';


interface writeToFileOptions {
    enabled:boolean,
    preserveColors?:boolean,
    fileName: string,
    fileExtension?: string,
    directory?: string,
}

export interface LoggerOptions {
    writeToFile?: writeToFileOptions,
    timeZone?: string,
    timeFormat?: string,
    languaje?: string,
    centerColumns?: number,
    createDirIfNotExists?: boolean,
    operationId?: string,
}

export enum LColor {
    c_gray = '\x1b[90m',
    c_red = '\x1b[91m',
    c_green = '\x1b[32m',
    c_yellow = '\x1b[33m',
    c_magenta = '\x1b[95m',
    c_cyan = '\x1b[36m',
    c_white = '\x1b[37m',
    c_default = '\x1b[0m'
}

export function spacer(length?:number){
    return '-'.repeat(length||52);
}

export class Logger {

    defaultOptions: LoggerOptions = {
        writeToFile: {
            enabled: false,
            preserveColors: true,
            fileName: 'log',
            fileExtension: 'txt',
            directory: '/logs',
        },
        timeZone: 'America/Mexico_City',
        timeFormat: null,
        languaje: 'es',
        centerColumns: 50,
        createDirIfNotExists: true,
        operationId: null,
    };
    options: LoggerOptions = {} as LoggerOptions;

    constructor(options?: LoggerOptions) {

        this.options = {
            ...this.defaultOptions,
            ...options
        };

        this.options.writeToFile = {
            ...this.defaultOptions.writeToFile,
            ...this.options.writeToFile
        }

        moment.locale(this.options.languaje.toLowerCase());
    }

    info(text: string, _center?: boolean) {
        this.write(this.createLog(LColor.c_gray, text, _center));
    }

    error(text: string, _center?: boolean) {
        this.write(this.createLog(LColor.c_red, text, _center));
    }

    success(text: string, _center?: boolean) {
        this.write(this.createLog(LColor.c_green, text, _center));
    }

    warn(text: string, _center?: boolean) {
        this.write(this.createLog(LColor.c_yellow, text, _center));
    }

    cyan(text: string, _center?: boolean) {
        this.write(this.createLog(LColor.c_cyan, text, _center));
    }

    magenta(text: string, _center?: boolean) {
        this.write(this.createLog(LColor.c_magenta, text, _center));
    }


    createLog(color: LColor, text: string, _center?: boolean) {
        let t = ' ' + text;
        if (_center) {
            t = center(text, this.options.centerColumns);
        }
        return [
            this.getTime(),
            this.getOperationId(),
            color,
            t,
            LColor.c_default
        ].join('');
    }

    write(text: string) {
        if (!process.env.HIDE_LOGS) {
            console.log.apply(console, [text]);
        }
        this.writeToFile(text);
    }

    cleanLog(text: string){
        let reg = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
        return text.replace(reg, '');
    }

    writeToFile(text: string) {
        if (!this.options.writeToFile.enabled) return;
        let logStr = text + '\n';
        if(!this.options.writeToFile.preserveColors){
            logStr = this.cleanLog(text) + '\n';
        }

        // let fileName = moment().format('YYYY-MM-DD') + this.options.fileName + '.' + this.options.extensionLogFile
        let fileName = this.options.writeToFile.fileName + '.' + this.options.writeToFile.fileExtension;

        let dirlogs = this.options.writeToFile.directory.replace('%date%', moment().format('YYYY-MM-DD'));

        if (!fs.existsSync(dirlogs)) {
            if (this.options.createDirIfNotExists) {
                try {
                    fs.mkdirSync(dirlogs, { recursive: true });
                } catch (e) {
                    console.error("Error creating logs directory");
                    console.error(e);
                    return;
                }
            }
        }

        let fdir = dirlogs + '/' + fileName;
        fs.appendFileSync(fdir, logStr);
    }

    getTime() {
        let f = this.options.timeFormat || 'DD-MM-YYYY HH:mm:ss.SSS';
        let tz = this.options.timeZone || 'America/Mexico_City';
        let m = moment().tz(tz)
        return LColor.c_gray + '[' + m
            .format(f) + ']' + LColor.c_default;
    }

    getOperationId() {
        if (this.options.operationId) {
            return LColor.c_gray + '[' + this.options.operationId + ']' + LColor.c_default;
        } else {
            return '';
        }
    }
}
