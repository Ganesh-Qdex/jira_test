# User API with MongoDB

A RESTful API built with Go and MongoDB for managing users. This application provides user creation functionality.

## Features

- Create new users
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
- **Response:** Created user object with ID (201 Created)

## Example Usage

### Create a user:
```bash
curl -X POST http://localhost:8080/api/v1/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","age":30}'
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