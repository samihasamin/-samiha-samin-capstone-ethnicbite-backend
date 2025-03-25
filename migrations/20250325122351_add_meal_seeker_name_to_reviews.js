export async function up(knex) {
  return knex.schema.alterTable("reviews", (table) => {
    table.string("meal_seeker_name");
  });
}

export async function down(knex) {
  return knex.schema.alterTable("reviews", (table) => {
    table.dropColumn("meal_seeker_name");
  });
}
