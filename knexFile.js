// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      database: "cloud_note",
      user: "postgres",
      password: "2345",
    },
    seeds: {
      directory: "./seeds/dev",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
