# User CRUD API with MongoDB

A RESTful API built with Go and MongoDB for managing users. This application provides full CRUD (Create, Read, Update, Delete) operations for user management.

## Features

- Create new users
- Get user by ID
- Get all users
- Update user information
- Delete users
- MongoDB integration
- RESTful API endpoints

## Prerequisites

- Go 1.21 or higher
- MongoDB (local or remote instance)

## Setup

1. **Install dependencies:**
   ```bash
   go mod download
   ```

2. **Set environment variables (optional):**
   ```bash
   # Windows
   set MONGODB_URI=mongodb://localhost:27017
   set MONGODB_DB=jira_test
   set PORT=8080

   # Linux/Mac
   export MONGODB_URI=mongodb://localhost:27017
   export MONGODB_DB=jira_test
   export PORT=8080
   ```

   Default values:
   - `MONGODB_URI`: `mongodb://localhost:27017`
   - `MONGODB_DB`: `jira_test`
   - `PORT`: `8080`

3. **Start MongoDB:**
   Make sure MongoDB is running on your system. If using Docker:
   ```bash
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

4. **Run the application:**
   ```bash
   go run main.go
   ```

   The server will start on `http://localhost:8080`

## API Endpoints

### Create User
- **POST** `/api/v1/users`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }
  ```
- **Response:** Created user object with ID

### Get All Users
- **GET** `/api/v1/users`
- **Response:** Array of all users

### Get User by ID
- **GET** `/api/v1/users/{id}`
- **Response:** User object

### Update User
- **PUT** `/api/v1/users/{id}`
- **Request Body:** (all fields optional)
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "age": 25
  }
  ```
- **Response:** Success message

### Delete User
- **DELETE** `/api/v1/users/{id}`
- **Response:** Success message

### Health Check
- **GET** `/health`
- **Response:** `OK`

## Example Usage

### Create a user:
```bash
curl -X POST http://localhost:8080/api/v1/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","age":30}'
```

### Get all users:
```bash
curl http://localhost:8080/api/v1/users
```

### Get user by ID:
```bash
curl http://localhost:8080/api/v1/users/{user_id}
```

### Update user:
```bash
curl -X PUT http://localhost:8080/api/v1/users/{user_id} \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","age":25}'
```

### Delete user:
```bash
curl -X DELETE http://localhost:8080/api/v1/users/{user_id}
```

## Project Structure

```
.
├── main.go                 # Application entry point and server setup
├── models/
│   └── user.go            # User model and request structs
├── database/
│   └── mongodb.go         # MongoDB connection handling
├── repositories/
│   └── user_repository.go # Database operations
├── services/
│   └── user_service.go    # Business logic
└── handlers/
    └── user_handler.go    # HTTP request handlers
```

## Technologies Used

- Go 1.21
- MongoDB Go Driver
- Gorilla Mux (HTTP router)