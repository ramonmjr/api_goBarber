module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  // PARA mssql
  // username: 'SA',
  // PARA postgres
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
