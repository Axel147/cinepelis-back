require('dotenv').config();

export const PORT = process.env.PORT
export const SSQL_URI = {
  user: process.env.configSQL_user,
  password: process.env.configSQL_password,
  server: process.env.configSQL_server,
  database: process.env.configSQL_database,
  port: process.env.configSQL_port || 1433, // Usar 1433 por defecto si no se proporciona
  options: {
    trustServerCertificate: process.env.configSQL_options_trustServerCertificate,
    encrypt: process.env.configSQL_encrypt,
  },
}
