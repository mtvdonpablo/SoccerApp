Performance FC
A web application designed to provide soccer coaches with drills based on the desired skill to improve, the number of players available, and the age group. Built using React, Node.js, and MongoDB.

Project Overview
Most soccer coaches dont have the time to look around on the internet to find effective drills for their players. My site is hoping to make it easier and take away the tedious task of finding drills for their training sessions.
Performance FC helps soccer coaches access tailored drills based on specific criteria like the skill to improve, number of players, and age group. The web app is built using a MERN (MongoDB, Express, React, Node.js) stack.

Features
Drill recommendations based on player count, age, and skill focus.
A user-friendly interface built with React.
Backend handles data storage and retrieval using MongoDB.

Technologies Used
Frontend: React.js
Backend: Node.js, Express
Database: MongoDB (with Mongoose for data modeling)
Environment Management: dotenv
Development: Nodemon (for live server reloading)


Installation
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (version 14 or higher)
MongoDB (running locally or in the cloud with MongoDB Atlas)

Steps to Install
Clone the Repository:

git clone (https://github.com/mtvdonpablo/soccerApp)
cd soccerapp
Install Dependencies: Run the following commands to install the dependencies for both the frontend and backend.
npm install
npm install --prefix Frontend
Environment Variables: Create a .env file in the root directory and add the following:

MONGO_URI=your_mongodb_connection_string
PORT=5000
Running the Application:

For development:
npm run dev
For production:
npm run start

Usage
After running the app, access it via http://localhost:5000 (or another port if you've configured it differently in your .env file).
The application provides a form where coaches can input:
The desired skill to improve (e.g., passing, shooting).
The number of players available.
The age group of players.
Based on this input, the app will recommend relevant soccer drills.

API Endpoints (based on your Postman setup)
Create a Drill (POST)

Endpoint: POST /api/drills
Description: Allows you to create a new soccer drill by providing drill details in the request body.
Delete a Drill (DELETE)

Endpoint: DELETE /api/drills/:id
Description: Deletes a specific drill based on its ID.
Get All Drills (GET)

Endpoint: GET /api/drills
Description: Retrieves all the available soccer drills.
Update a Drill (PUT)

Endpoint: PUT /api/drills/:id
Description: Updates an existing drill by specifying the drill ID and sending the updated data in the request body.
