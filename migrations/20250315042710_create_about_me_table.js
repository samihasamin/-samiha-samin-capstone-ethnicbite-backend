/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("about_me", (table) => {
    table.increments("id").primary();
    table
      .integer("caterer_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("caterers")
      .onDelete("CASCADE");
    table.text("bio").notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("about_me");
}
