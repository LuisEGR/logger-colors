interface WriteToFileOptions {
    enabled: boolean;
    preserveColors?: boolean;
    fileName: string;
    fileExtension?: string;
    directory?: string;
    createDirIfNotExists?: boolean;
}
export interface LoggerOptions {
    writeToFile?: WriteToFileOptions;
    timeZone?: string;
    timeFormat?: string;
    languaje?: string;
    centerColumns?: number;
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
    private defaultOptions;
    options: LoggerOptions;
    constructor(options?: LoggerOptions);
    info(text: string, _center?: boolean): void;
    error(text: string, _center?: boolean): void;
    success(text: string, _center?: boolean): void;
    warn(text: string, _center?: boolean): void;
    cyan(text: string, _center?: boolean): void;
    magenta(text: string, _center?: boolean): void;
    private createLog;
    private write;
    private cleanLog;
    private writeToFile;
    private getTime;
    private getOperationId;
}
export {};
