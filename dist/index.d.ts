export interface LoggerOptions {
    writeToFile: boolean;
    dirLogs: string | null | undefined;
    extensionLogFile: string | null | undefined;
    timeZone: string | null | undefined;
    timeFormat: string | null | undefined;
    languaje: string | null | undefined;
    centerColumns: number | null | undefined;
    createDirIfNotExists: boolean;
    fileNameSuffix: string | null | undefined;
    operationId: string | null | undefined;
}
export declare enum LColor {
    c_gray = "\u001B[90m",
    c_red = "\u001B[91m",
    c_green = "\u001B[32m",
    c_yellow = "\u001B[33m",
    c_magenta = "\u001B[95m",
    c_cyan = "\u001B[36m",
    c_white = "\u001B[37m",
    c_default = "\u001B[0m"
}
export declare class Logger {
    defaultOptions: LoggerOptions;
    options: LoggerOptions;
    constructor(options?: LoggerOptions);
    info(text: string, _center?: boolean): void;
    error(text: string, _center?: boolean): void;
    success(text: string, _center?: boolean): void;
    warn(text: string, _center?: boolean): void;
    cyan(text: string, _center?: boolean): void;
    magenta(text: string, _center?: boolean): void;
    createLog(color: LColor, text: string, _center?: boolean): string;
    write(text: string): void;
    writeToFile(text: string): void;
    getTime(): string;
    getOperationId(): string;
}
