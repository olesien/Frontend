const { transports } = require("winston");
const winston = require("winston");

const myFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level} ${message}`;
});

const log = winston.createLogger(
    //level, format, meta, transport
    {
        level: "info",
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp({ format: "YYMMDD HH:mm:ss" }),
            winston.format.splat(),
            myFormat
        ),
        transports: [new winston.transports.Console()],
    }
);

log.error("Ett error meddleeka de");
log.warn("Ett error meddleeka de");
log.info("Ett error meddleeka de");
log.http("Ett error meddleeka de");
log.verbose("Ett error meddleeka de");
log.debug("Ett error meddleeka de");
log.silly("Ett error meddleeka de");

const person = { id: 20, name: "linusjda", email: "masdo@meail.com" };
log.info("%s loggade precis in med lösenordet %s", person.name, person.email);
