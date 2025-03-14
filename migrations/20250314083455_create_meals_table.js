/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("meals", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.text("description");
    table.decimal("price", 8, 2).notNullable();
    table.string("image_url"); // Placeholder for meal images
    table
      .integer("caterer_id")
      .unsigned()
      .references("id")
      .inTable("caterers")
      .onDelete("CASCADE");
    table
      .integer("cuisine_id")
      .unsigned()
      .references("id")
      .inTable("cuisines")
      .onDelete("CASCADE");
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("meals");
}
