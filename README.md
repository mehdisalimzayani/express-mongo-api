                                                      # Node Express MongoDB API

This project is an API built using Node.js/Express and MongoDB for data storage. It provides REST endpoints for performing CRUD operations on a collection of data   stored in the MongoDB database. <br>
 Users can retrieve all data items, retrieve a single data item by ID, add a new data item, update an existing data item, and delete an existing data item. The project includes client-side code built with React.js that interacts with the API to display and manipulate the data. / The code repository includes separate files for the server-side and client-side code, as well as separate components for each feature of the application.

## Prerequisites
[Node.js (version 18.13.0 or higher)](https://nodejs.org) <br>
[MongoDB (version 7.0.2 or higher)](https://mongodb.com) <br>

## Installation
Clone the code repository to your computer. <br>
In the project folder, run  `npm install` 
to install the dependencies.

## Usage

Run `npm start` to start the Node.js server
Test the REST API by sending HTTP requests to the URL <br>
http://localhost:3000/api/students
### API Routes
`GET /api/students` : Returns all students data <br>
`GET /api/student/:id` : Returns a single student based on the provided ID <br>
`POST /api/student` : Adds a new student to the database <br>
`PUT /api/student/:id` : Updates an existing student based on the provided ID <br>
`DELETE /api/student/:id` : Deletes an existing student based on the provided ID <br>
 
## Contribution

Contributions are welcome! If you would like to make changes to this project, please follow the steps below: <br>

Create a new branch from main <br>
Make desired changes on this new branch <br>
Submit a pull request with a clear title and description <br>
## License
This project is licensed under the MIT License. See the LICENSE file for more details.