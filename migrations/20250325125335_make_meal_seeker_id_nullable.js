export async function up(knex) {
  return knex.schema
    .alterTable("reviews", (table) => {
      table.dropForeign("meal_seeker_id"); // Step 1: Drop FK constraint
    })
    .then(() => {
      return knex.schema.alterTable("reviews", (table) => {
        table.integer("meal_seeker_id").nullable().alter(); // Step 2: Make nullable
      });
    });
}

export async function down(knex) {
  return knex.schema
    .alterTable("reviews", (table) => {
      table.integer("meal_seeker_id").notNullable().alter();
    })
    .then(() => {
      return knex.schema.alterTable("reviews", (table) => {
        table
          .foreign("meal_seeker_id")
          .references("id")
          .inTable("meal_seekers");
      });
    });
}
