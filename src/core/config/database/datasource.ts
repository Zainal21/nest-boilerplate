import environments from "@core/environments";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: environments.DB_HOST,
  database: environments.DB_DATABASE,
  username: environments.DB_USERNAME,
  port: environments.DB_PORT,
  password: environments.DB_PASSWORD,
  entities: ["dist/modules/**/*.entity.js"],
  migrations: ["dist/core/migrations/*.js"],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
