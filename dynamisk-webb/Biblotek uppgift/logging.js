const { transports } = require("winston");
const winston = require("winston");

const myFormat = winston.format.printf(
    ({ level, message, timestamp, label }) => {
        return `[${timestamp}] [${level}] [${label}] ${message}`;
    }
);

const log = winston.createLogger(
    //level, format, meta, transport
    {
        level: "info",
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp({ format: "HH:mm:ss" }),
            winston.format.label({ label: "INFO/ERR" }),

            winston.format.splat(),
            myFormat
        ),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: "info.log" }),
        ],
    }
);
module.exports = log;
