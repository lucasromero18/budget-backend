
exports.up = function(knex, Promise) {
  return knex.schema.createTable("credentials", (table) => {
      table.increments();
      table.integer("user_id")
      .references("id")
      .inTable("users")
      .notNullable()
      .onDelete("CASCADE");
      table.string("bill_name");
      table.decimal("bill_price");
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("credentials")
};
