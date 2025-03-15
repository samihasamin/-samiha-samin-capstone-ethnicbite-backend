/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("profile_picture", (table) => {
    table.increments("id").primary();
    table
      .integer("caterer_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("caterers")
      .onDelete("CASCADE");
    table.string("photo_url").notNullable(); // URL for caterer's profile photo
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("profile_picture");
}
