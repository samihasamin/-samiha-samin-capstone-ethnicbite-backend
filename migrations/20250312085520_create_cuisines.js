/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("cuisines", (table) => {
    table.increments("id").primary();
    table.string("type").notNullable(); // e.g., "Greek", "Nigerian"
    table.string("name").notNullable(); // Dish name
    table.text("description");
    table.string("icon_url");
    table
      .integer("caterer_id")
      .unsigned()
      .references("id")
      .inTable("caterers")
      .onDelete("CASCADE");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("cuisines");
}
