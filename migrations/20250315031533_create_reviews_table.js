/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("id").primary();
    table
      .integer("caterer_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("caterers")
      .onDelete("CASCADE");
    table
      .integer("meal_seeker_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("meal_seekers")
      .onDelete("CASCADE");
    table.integer("rating").notNullable().checkBetween([1, 5]); // Rating between 1-5
    table.text("review").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("reviews");
}
