# Backend API Documentation

## User Registration Endpoint

#### Description

Register a new user in the system.

#### HTTP Method

`POST`

#### Request Body

````json
{
  "fullname": {
    "first_name": "string",
    "last_name": "string"
  },
  "email": "string",
  "password": "string",
}

#### Response Codes

| Status Code | Description                              |
| ----------- | ---------------------------------------- |
| 201         | User successfully created                |
| 400         | Bad request - Invalid data provided      |
| 409         | Conflict - Username/Email already exists |

#### Success Response Example

```json
{
  "status": "success",
  "message": "User registered successfully",
  "data": {
    "id": "uuid",
    "email": "john@example.com",
    "fullname": {
        "first_name": "John",
        "last_name": "Doe"
    }
    }
}
````

#### Error Response Example

```json
{
  "status": "error",
  "message": "Username already exists",
  "errors": {
    "username": ["This username is already taken"]
  }
}
```

## API Endpoints

### Login User

`POST /users/login`

Authenticates a user and returns a JWT token and user details.

#### Request Body

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

#### Response

**Success (200 OK)**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    }
    "email": "user@example.com",
    "password": "hashed_password"
  }
}
```

**Error (401 Unauthorized)**

```json
{
  "error": "Invalid email or password"
}
```

#### Example Usage

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    }
    "email": "user@example.com",
    "password": "hashed_password"
  }
}
```
