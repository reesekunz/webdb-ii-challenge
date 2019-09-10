#PROJECT STEPS TAKEN FOR MVP

1. npm i

2. npm i express

3. add start script to package.json

4. Add server.js file and set up router to carsRouter file that needs to be created

5. Add index.js file, set up port, and import server.js

6. Build out carsRouter with crud operations

7. npm add knex sqlite3 <!-- local install  -->
   npm install -g knex <!-- global install -->

8. knex init <!-- creates a knexfile.js (can delete production and staging objects) -->

9. Adjust knexfile.js to match your projects context (config settings)

10. Create a data folder

11. Inside the data folder, add a db-config.js file. This file should be importing your knex file and then being exported as the database into carsRouter

12. knex migrate:make cars-table <!-- Creates a migrations folder and a file where you will be creating the cars table  -->

13. Build out the created file inside migrations folder to create a cars table based on the specifications/field requirements given

14. knex migrate:latest <!-- runs all the latest migrations -->
    In Postman you should now be returning an empty object on your GET request
