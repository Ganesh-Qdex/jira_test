# Simple Hello World Server

A basic HTTP server that returns "Hello World!" - not related to any user management or database operations.

## Features

- Simple HTTP server
- Returns "Hello World!" message
- No database integration
- No CRUD operations
- No user management

## Prerequisites

- Go 1.21 or higher

## Setup

1. **Run the application:**
   ```bash
   go run main.go
   ```

   The server will start on `http://localhost:3000`

## API Endpoints

### Hello World
- **GET** `/`
- **Response:** "Hello World!"

## Example Usage

```bash
curl http://localhost:3000/
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
└── main.go                 # Simple HTTP server
```

## Technologies Used

- Go 1.21
- Standard library HTTP server (no external dependencies)

## Note

This application does not implement any user CRUD operations, MongoDB integration, or any of the features mentioned in the JIRA ticket. It is a simple hello world server.
