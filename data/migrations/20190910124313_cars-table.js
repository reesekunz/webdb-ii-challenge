// up is the changes we want to make
exports.up = function(knex) {
  // CREATING A TABLE CALLED CARS
  // all these methods are being called with schema (knex schema builder)
  return knex.schema.createTable("cars", column => {
    // id = primary key, autoincrement, integer
    column.increments(); // defaults to id
    column // VIN = required
      .text("VIN")
      .unique()
      .notNullable();
    column.text("make").notNullable; // make = required

    column.text("model").notNullable; // model = required

    column.integer("mileage").notNullable; // mileage = required

    column.text("transmission type"); // transmission type = not required

    column.text("title status"); // status of the title (clean, salvage, etc.) = not required
  });
};

exports.down = function(knex) {
  // revert the changes from up function
  return knex.schema.dropTableIfExists("cars");
};
