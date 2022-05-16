import { DataSource } from "typeorm";

const postgresDataSource = new DataSource({
  type: "postgres",
  host: "192.168.99.100",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "valoriza",
  entities: ["./src/model/**.ts"],
});

postgresDataSource
  .initialize()

  .then(() => {
    console.log("Data Source has been initialized");
  })
  .catch((err) => {
    console.log("error during Data soruce initialization", err);
  });
