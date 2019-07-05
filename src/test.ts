import { Logger, LColor } from './index';

let myLogger = new Logger();

myLogger.info(`INFO`);
myLogger.info(`INFO Center`, true);
myLogger.error("Error", true);
myLogger.success("Success", true);
myLogger.warn("Warn", true);
myLogger.magenta(`a${LColor.c_green}g${LColor.c_yellow}d`, true);
