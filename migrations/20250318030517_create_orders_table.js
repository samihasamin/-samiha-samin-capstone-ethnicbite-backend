/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("orders", (table) => {
    table.increments("id").primary();
    table
      .integer("meal_seeker_id")
      .unsigned()
      .references("id")
      .inTable("meal_seekers")
      .onDelete("CASCADE");
    table
      .integer("caterer_id")
      .unsigned()
      .references("id")
      .inTable("caterers")
      .onDelete("CASCADE");
    table.decimal("total_price", 10, 2).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("orders");
}
