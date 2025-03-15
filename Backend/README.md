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

# API Documentation

## User Endpoints

### Get User Profile

`GET /users/profile`

Retrieves the currently authenticated user's profile information.

#### Authentication

- Requires valid JWT token in Authorization header

#### Response

**200 OK**

```json
{
  "id": "string",
  "username": "string",
  "email": "string"
}
```

**401 Unauthorized**

```json
{
  "error": "Invalid or missing authentication token"
}
```

### Logout User

`POST /users/logout`

Logs out the currently authenticated user by invalidating their session token and blacklisting the token provided in cookie or headers.

### HTTP Method

`GET`

#### Authentication

- Requires valid JWT token in Authorization header or cookie

#### Response

**200 OK**

```json
{
  "message": "Successfully logged out"
}
```

**401 Unauthorized**

```json
{
  "error": "Invalid or missing authentication token"
}
```

# Captain Routes Documentation

This document outlines the available API routes for the Captain service.

## Overview

The Captain service provides endpoints for managing captain-related operations such as authentication, profile management, and trip management.

## Authentication Routes

### Register Captain

```
POST /api/captains/register
```

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890",
  "licenseNumber": "DL12345678"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Captain registered successfully",
  "data": {
    "id": "captain_id",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "token": "jwt_token"
}
```

# Captain Routes Documentation

This document outlines the available API routes for the Captain service.

## Overview

The Captain service provides endpoints for managing captain-related operations such as authentication, profile management, and trip management.

## Authentication Routes

### Register Captain

`POST /api/captains/register`

**Request Body:**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "sedan"
  }
}
```

**Response:**

**Success (201 Created)**

```json
{
  "token": "jwt_token",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "sedan"
    }
  }
}
```

**Error (400 Bad Request)**

```json
{
  "errors": [
    {
      "msg": "Fullname is required",
      "param": "fullname",
      "location": "body"
    },
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Vehicle color is required",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Vehicle plate is required",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Vehicle capacity is required",
      "param": "vehicle.capacity",
      "location": "body"
    }
  ]
}
```

### Login Captain

`POST /api/captains/login`

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

**Success (200 OK)**

```json
{
  "token": "jwt_token",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "sedan"
    }
  }
}
```

**Error (400 Bad Request)**

```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password is required",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Get Captain Profile

`GET /api/captains/profile`

**Authentication:**

- Requires valid JWT token in Authorization header

**Response:**

**Success (200 OK)**

```json
{
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "sedan"
    }
  }
}
```

**Error (401 Unauthorized)**

```json
{
  "error": "Invalid or missing authentication token"
}
```

### Logout Captain

`POST /api/captains/logout`

**Authentication:**

- Requires valid JWT token in Authorization header or cookie

**Response:**

**Success (200 OK)**

```json
{
  "message": "Successfully logged out"
}
```

**Error (401 Unauthorized)**

```json
{
  "error": "Invalid or missing authentication token"
}
```
