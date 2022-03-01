![logger-colors](https://github.com/LuisEGR/logger-colors/raw/master/logo.png)
[![npm version](https://badge.fury.io/js/logger-colors.svg)](https://badge.fury.io/js/logger-colors)
[![npm licence](https://img.shields.io/npm/l/logger-colors)](https://img.shields.io/npm/l/logger-colors)
[![npm installs](https://img.shields.io/npm/dt/logger-colors)](https://img.shields.io/npm/dt/logger-colors)
![npm bundle size](https://img.shields.io/bundlephobia/min/logger-colors)  

Utilities for printing and writing logs for Node.Js

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

## Install

```
npm install -s logger-colors
```


## Demo

```typescript
import { Logger, LColor } from 'logger-colors';


let myLogger = new Logger({
    operationId: 'demo',
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
```

Will become:

![logger-colors demo](https://github.com/LuisEGR/logger-colors/raw/master/demo.png)

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;


## Methods

- Logger.info

|  method | description | 
|:---|:---|
|logger.info(str, center=false)|prints an info log (grey color) |
|logger.error(str, center=false)|prints an error log (red color) |
|logger.success(str, center=false)|prints an success log (green color) |
|logger.warn(str, center=false)|prints an warn log (yellow color) |
|logger.magenta(str, center=false)|prints an magenta color log|
|logger.cyan(str, center=false)|prints an cyan color log|


## Options

|  option | type | default  | description  |
|---:|:---:|:---:|:---|
|  timeZone | string | `'America/Mexico_City'`  | https://en.wikipedia.org/wiki/List_of_tz_database_time_zones | 
| timeFormat | string  | 'DD-MM-YYYY HH:mm:ss.SSS' | momentjs format string | 
| languaje  | string | `'es'` |  languaje string for date (moment locale) 
| centerColumns  | number |  `50` | This option centers the content of the log in the <centerColumns> indicated, eg. 'a', centered at 5 will become '  a  ' | 
| operationId  | string | `null` | Used for easy identification of logs, will be present after the datetime in each log 
| writeToFile  | WriteToFileOptions | | Options for writing the log to an external file


  
    
      

### WriteToFileOptions

|  option | type | default  | description  |
|---:|:---:|:---:|:---|
| enabled  | boolean |  `false` |   if enabled then the logs will be writted to the file
| preserveColors  | boolean |  `true` |  if the colors want to be preserved, this will look bad if you open the log file in a non-compatible terminal or if you want to process the log info, useful just for searching with cat/grep
| fileName  | boolean |  `log` | name of the file to save
| fileExtension  | boolean |  `txt` | the output will be text, the extension is just for the filename
| directory  | boolean |  `/logs` |  directory name, snippet `%date%` can be used and will be replaced with the current date when writing the file, eg. /etc/logs/my-logs-%date% ==> /etc/logs/my-logs-2021-01-01
| createDirIfNotExists  | boolean |  `true` |  whether or not the directory should be created if it does not exists

&nbsp;
&nbsp;
&nbsp;

You can also prefix your string with one of this variables to have multiple colors in one line:

```typescript
import { LColor } from 'logger-colors';
```

- LColor.c_gray
- LColor.c_green
- LColor.c_red
- LColor.c_yellow
- LColor.c_magenta
- LColor.c_cyan
- LColor.c_white


Note: All the logs are printed internally using `console.log`, so this is not useful if you want to handle errors/debug logs with *stdout* and *stderr*, **everything is sent to stdout.**