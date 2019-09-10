exports.seed = function(knex) {
  return knex("cars")
    .truncate() // change delete to truncate - truncate updates the id's when one is deleted/edited
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        // manually adding testing/starter data based on specifications defined in cars-table migrations
        {
          VIN: "910VH19",
          make: "Toyota",
          model: "Prius",
          mileage: 100000,
          "transmission type": "Automatic",
          "title status": "Used"
        },
        {
          VIN: "810VH13",
          make: "Tesla",
          model: "Model 3",
          mileage: 0,
          "transmission type": "Automatic",
          "title status": "Clean"
        },
        { VIN: "110VH10", make: "Jeep", model: "Liberty", mileage: 200000 }
      ]);
    });
};
