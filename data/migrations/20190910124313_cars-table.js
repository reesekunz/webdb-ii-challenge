// up is the changes we want to make
exports.up = function(knex) {
  // CREATING A TABLE CALLED CARS
  // id = primary key, autoincrement, integer
  // VIN = required
  // make = required
  // model = required
  // mileage = required
  // transmission type = not required
  // status of the title (clean, salvage, etc.) = not required
  // all these methods are being called with schema (knex schema builder)

  return knex.schema.createTable("cars", column => {
    // id = primary key, autoincrement, integer
    column.increments(); // defaults to id
    // name: string, up to 128 characters, unique, required (not null)
    column
      .text("name", 128)
      .unique()
      .notNullable();
    // avgWeightOz: decimals
    column.decimal("avgWeightOz");
    // delicious: boolean (T/F)
    column.boolean("delicious");
  });
};

exports.down = function(knex) {
  // revert the changes from up function
  return knex.schema.dropTableIfExists("cars");
};
