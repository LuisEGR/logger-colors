"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_timezone_1 = __importDefault(require("moment-timezone"));
var center_align_1 = __importDefault(require("center-align"));
var fs_1 = __importDefault(require("fs"));
var LColor;
(function (LColor) {
    LColor["c_gray"] = "\u001B[90m";
    LColor["c_red"] = "\u001B[91m";
    LColor["c_green"] = "\u001B[32m";
    LColor["c_yellow"] = "\u001B[33m";
    LColor["c_magenta"] = "\u001B[95m";
    LColor["c_cyan"] = "\u001B[36m";
    LColor["c_white"] = "\u001B[37m";
    LColor["c_default"] = "\u001B[0m";
})(LColor = exports.LColor || (exports.LColor = {}));
function spacer(length) {
    return '-'.repeat(length || 52);
}
exports.spacer = spacer;
var Logger = /** @class */ (function () {
    function Logger(options) {
        this.defaultOptions = {
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
        this.options = {};
        this.options = __assign({}, this.defaultOptions, options);
        this.options.writeToFile = __assign({}, this.defaultOptions.writeToFile, this.options.writeToFile);
        moment_timezone_1.default.locale(this.options.languaje.toLowerCase());
    }
    Logger.prototype.info = function (text, _center) {
        this.write(this.createLog(LColor.c_gray, text, _center));
    };
    Logger.prototype.error = function (text, _center) {
        this.write(this.createLog(LColor.c_red, text, _center));
    };
    Logger.prototype.success = function (text, _center) {
        this.write(this.createLog(LColor.c_green, text, _center));
    };
    Logger.prototype.warn = function (text, _center) {
        this.write(this.createLog(LColor.c_yellow, text, _center));
    };
    Logger.prototype.cyan = function (text, _center) {
        this.write(this.createLog(LColor.c_cyan, text, _center));
    };
    Logger.prototype.magenta = function (text, _center) {
        this.write(this.createLog(LColor.c_magenta, text, _center));
    };
    Logger.prototype.createLog = function (color, text, _center) {
        var t = ' ' + text;
        if (_center) {
            t = center_align_1.default(text, this.options.centerColumns);
        }
        return [
            this.getTime(),
            this.getOperationId(),
            color,
            t,
            LColor.c_default
        ].join('');
    };
    Logger.prototype.write = function (text) {
        if (!process.env.HIDE_LOGS) {
            console.log.apply(console, [text]);
        }
        this.writeToFile(text);
    };
    Logger.prototype.cleanLog = function (text) {
        var reg = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
        return text.replace(reg, '');
    };
    Logger.prototype.writeToFile = function (text) {
        if (!this.options.writeToFile.enabled)
            return;
        var logStr = text + '\n';
        if (!this.options.writeToFile.preserveColors) {
            logStr = this.cleanLog(text) + '\n';
        }
        // let fileName = moment().format('YYYY-MM-DD') + this.options.fileName + '.' + this.options.extensionLogFile
        var fileName = this.options.writeToFile.fileName + '.' + this.options.writeToFile.fileExtension;
        var dirlogs = this.options.writeToFile.directory.replace('%date%', moment_timezone_1.default().format('YYYY-MM-DD'));
        if (!fs_1.default.existsSync(dirlogs)) {
            if (this.options.createDirIfNotExists) {
                try {
                    fs_1.default.mkdirSync(dirlogs, { recursive: true });
                }
                catch (e) {
                    console.error("Error creating logs directory");
                    console.error(e);
                    return;
                }
            }
        }
        var fdir = dirlogs + '/' + fileName;
        fs_1.default.appendFileSync(fdir, logStr);
    };
    Logger.prototype.getTime = function () {
        var f = this.options.timeFormat || 'DD-MM-YYYY HH:mm:ss.SSS';
        var tz = this.options.timeZone || 'America/Mexico_City';
        var m = moment_timezone_1.default().tz(tz);
        return LColor.c_gray + '[' + m
            .format(f) + ']' + LColor.c_default;
    };
    Logger.prototype.getOperationId = function () {
        if (this.options.operationId) {
            return LColor.c_gray + '[' + this.options.operationId + ']' + LColor.c_default;
        }
        else {
            return '';
        }
    };
    return Logger;
}());
exports.Logger = Logger;
