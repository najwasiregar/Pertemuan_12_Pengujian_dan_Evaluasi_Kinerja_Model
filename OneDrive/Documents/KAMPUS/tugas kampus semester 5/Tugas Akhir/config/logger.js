const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
  ),
  transports: [
    new transports.Console(), // Menampilkan log di terminal
    new transports.File({ filename: 'logs/app.log' }), // Menyimpan log ke file
  ],
});

module.exports = logger;
