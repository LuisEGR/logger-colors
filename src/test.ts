import { LColor, Logger, spacer } from "./index";

let myLogger = new Logger({
  operationId: "demo",
  centerColumns: 50,
});

myLogger.info(`Info`);
myLogger.error("Error");
myLogger.success("Success");
myLogger.warn("Warn");

myLogger.cyan("Cyan");
myLogger.magenta("Magenta");

myLogger.info(spacer(50));

const center = true;
myLogger.info(`Info-Center`, center);
myLogger.error("Error-Center", center);
myLogger.success("Success-Center", center);
myLogger.warn("Warn-Center", center);

myLogger.magenta(`a${LColor.c_green}b${LColor.c_yellow}c`, true);


myLogger.info(
    `${LColor.c_gray}Gray` +
    `${LColor.c_red} Red` +
    `${LColor.c_green} Green` +
    `${LColor.c_yellow} Yellow` +
    `${LColor.c_magenta} Magenta` +
    `${LColor.c_cyan} Cyan` +
    `${LColor.c_white} White`,
);
