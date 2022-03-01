"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var myLogger = new index_1.Logger({
    operationId: "demo",
    centerColumns: 50,
});
// let a = `
// ██╗░░░░░░█████╗░░██████╗░░██████╗░███████╗██████╗░░░░░░░░█████╗░░█████╗░██╗░░░░░░█████╗░██████╗░░██████╗
// ██║░░░░░██╔══██╗██╔════╝░██╔════╝░██╔════╝██╔══██╗░░░░░░██╔══██╗██╔══██╗██║░░░░░██╔══██╗██╔══██╗██╔════╝
// ██║░░░░░██║░░██║██║░░██╗░██║░░██╗░█████╗░░██████╔╝█████╗██║░░╚═╝██║░░██║██║░░░░░██║░░██║██████╔╝╚█████╗░
// ██║░░░░░██║░░██║██║░░╚██╗██║░░╚██╗██╔══╝░░██╔══██╗╚════╝██║░░██╗██║░░██║██║░░░░░██║░░██║██╔══██╗░╚═══██╗
// ███████╗╚█████╔╝╚██████╔╝╚██████╔╝███████╗██║░░██║░░░░░░╚█████╔╝╚█████╔╝███████╗╚█████╔╝██║░░██║██████╔╝
// ╚══════╝░╚════╝░░╚═════╝░░╚═════╝░╚══════╝╚═╝░░╚═╝░░░░░░░╚════╝░░╚════╝░╚══════╝░╚════╝░╚═╝░░╚═╝╚═════╝░
//                                                  ░                                                    `;
// myLogger.cyan(a, true);
myLogger.info("Info");
myLogger.error("Error");
myLogger.success("Success");
myLogger.warn("Warn");
myLogger.cyan("Cyan");
myLogger.magenta("Magenta");
myLogger.info(index_1.spacer(50));
var center = true;
myLogger.info("Info-Center", center);
myLogger.error("Error-Center", center);
myLogger.success("Success-Center", center);
myLogger.warn("Warn-Center", center);
myLogger.magenta("a" + index_1.LColor.c_green + "b" + index_1.LColor.c_yellow + "c", true);
myLogger.info(index_1.LColor.c_gray + "Gray" +
    (index_1.LColor.c_red + " Red") +
    (index_1.LColor.c_green + " Green") +
    (index_1.LColor.c_yellow + " Yellow") +
    (index_1.LColor.c_magenta + " Magenta") +
    (index_1.LColor.c_cyan + " Cyan") +
    (index_1.LColor.c_white + " White"));
