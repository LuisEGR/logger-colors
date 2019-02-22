const Logger = require('./index');
const moment = require('moment');

let myLogger = new Logger({
    writeToFile: true,
    "timeUTCOffset": '-0600',
    dirLogs: './logs',
    fileName: moment().format('YYYY-MM-DD') + '_API_GATEWAY_WEB',
});

// myLogger.display();
myLogger.info(`INFO`);
myLogger.info(`INFO %d`,true);
myLogger.error("asd", 4, {});
myLogger.success("asd", 4, {});
myLogger.warn("asd", 4, {});
myLogger.magenta(`a${myLogger.c_green}g${myLogger.c_magenta}d`, true);
myLogger.cyan("asd", 4, {});
