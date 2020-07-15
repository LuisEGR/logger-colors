interface writeToFileOptions {
    enabled: boolean;
    preserveColors?: boolean;
    fileName: string;
    fileExtension?: string;
    directory?: string;
}
export interface LoggerOptions {
    writeToFile?: writeToFileOptions;
    timeZone?: string;
    timeFormat?: string;
    languaje?: string;
    centerColumns?: number;
    createDirIfNotExists?: boolean;
    operationId?: string;
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
export declare function spacer(length?: number): string;
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
    cleanLog(text: string): string;
    writeToFile(text: string): void;
    getTime(): string;
    getOperationId(): string;
}
export {};
