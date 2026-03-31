# User CRUD API with Node.js and MongoDB

A RESTful API for managing users built with Node.js, Express, and MongoDB.

## Features

- Create, Read, Update, Delete (CRUD) operations for users
- MongoDB database integration with Mongoose
- RESTful API endpoints
- Error handling and validation

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Update the `.env` file with your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/jira_test
PORT=5000
```

For MongoDB Atlas, use:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/jira_test
```

## Running the Application

### Development mode (with nodemon):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## API Endpoints

### Base URL: `http://localhost:5000/api/users`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create a new user |
| PUT | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Delete a user |

## Example Requests

### Create a User (POST)
```bash
POST http://localhost:5000/api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "phone": "123-456-7890",
  "address": "123 Main St"
}
```

### Get All Users (GET)
```bash
GET http://localhost:5000/api/users
```

### Get User by ID (GET)
```bash
GET http://localhost:5000/api/users/507f1f77bcf86cd799439011
```

### Update User (PUT)
```bash
PUT http://localhost:5000/api/users/507f1f77bcf86cd799439011
Content-Type: application/json

{
  "name": "Jane Doe",
  "age": 31
}
```

### Delete User (DELETE)
```bash
DELETE http://localhost:5000/api/users/507f1f77bcf86cd799439011
```

## User Schema

```javascript
{
  name: String (required),
  email: String (required, unique),
  age: Number,
  phone: String,
  address: String,
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## Project Structure

```
jira_test/
├── config/
│   └── database.js       # MongoDB connection
├── controllers/
│   └── userController.js # User CRUD logic
├── models/
│   └── User.js           # User schema/model
├── routes/
│   └── userRoutes.js     # User routes
├── .env.example          # Environment variables example
├── package.json          # Dependencies
├── README.md            # Documentation
└── server.js             # Main server file
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **dotenv** - Environment variable management
- **cors** - Cross-origin resource sharing

## License

ISC

