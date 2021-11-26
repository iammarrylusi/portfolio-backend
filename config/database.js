module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "portfolio"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "78e79c51ef3b459082c587838423ae4f"),
        schema: env("DATABASE_SCHEMA", "public"),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
