# Backend API Documentation

## User Registration Endpoint

#### Description

Register a new user in the system.

#### HTTPP Method

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
