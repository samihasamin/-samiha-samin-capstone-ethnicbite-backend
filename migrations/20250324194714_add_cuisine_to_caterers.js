export function up(knex) {
  return knex.schema.table("caterers", function (table) {
    table.string("cuisine");
  });
}

export function down(knex) {
  return knex.schema.table("caterers", function (table) {
    table.dropColumn("cuisine");
  });
}
