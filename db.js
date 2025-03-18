import knex from "knex";
import config from "./knexfile.js";

// Create and export a Knex instance using the development config
export default knex(config.development);
