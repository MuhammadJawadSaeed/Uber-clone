# API Documentation

## Overview

This API allows users and captains to register, login, retrieve their profile, and log out. It uses JWT authentication for secure access.

---

## User Registration (POST /users/register)

### Description

This endpoint allows new users to create an account by providing their full name, email, and password. Upon successful registration, the user receives a JWT token for authentication.

### Request Body

- **fullname** (object):
  - **firstname** (string, required): User's first name (minimum 3 characters).
  - **lastname** (string, optional): User's last name (minimum 3 characters if provided).
- **email** (string, required): User’s email address (must be a valid email).
- **password** (string, required): User’s password (minimum 6 characters).

### Example Response

- **token** (string): A JWT token for authentication.
- **user** (object):
  - **_id** (string): Unique identifier for the user.
  - **fullname** (object):
    - **firstname** (string): User’s first name.
    - **lastname** (string): User’s last name (if provided).
  - **email** (string): User’s email address.

---

## User Login (POST /users/login)

### Description

This endpoint allows registered users to log in by providing their email and password. If the credentials are correct, a JWT token is issued, which must be used for authentication in future requests.

### Request Body

- **email** (string, required): User’s email address (must be a valid email).
- **password** (string, required): User’s password (minimum 6 characters).

### Example Response

- **token** (string): A JWT token for authentication.
- **user** (object):
  - **_id** (string): Unique identifier for the user.
  - **fullname** (object):
    - **firstname** (string): User’s first name.
    - **lastname** (string): User’s last name (if provided).
  - **email** (string): User’s email address.

---

## Get User Profile (GET /users/profile)

### Description

This endpoint allows authenticated users to retrieve their profile information. The request must include a valid JWT token.

### Example Response

- **_id** (string): Unique identifier for the user.
- **fullname** (object):
  - **firstname** (string): User’s first name.
  - **lastname** (string): User’s last name (if provided).
- **email** (string): User’s email address.

---

## User Logout (GET /users/logout)

### Description

This endpoint allows authenticated users to log out. The system blacklists the token to prevent further use.

### Example Response

- **message** (string): Confirmation message indicating successful logout.

---

## Captain Registration (POST /captains/register)

### Description

This endpoint allows captains to create an account by providing their full name, email, password, and vehicle details. Upon successful registration, the captain receives a JWT token for authentication.

### Request Body

- **fullname** (object):
  - **firstname** (string, required): Captain's first name (minimum 3 characters).
  - **lastname** (string, optional): Captain's last name (minimum 3 characters if provided).
- **email** (string, required): Captain’s email address (must be a valid email).
- **password** (string, required): Captain’s password (minimum 6 characters).
- **vehicle** (object, required):
  - **plate** (string, required): Vehicle's plate number.
  - **capacity** (number, required): Vehicle's capacity.
  - **vehicleType** (string, required): Type of vehicle (e.g., car, motorcycle, auto).

### Example Response

- **token** (string): A JWT token for authentication.
- **captain** (object):
  - **_id** (string): Unique identifier for the captain.
  - **fullname** (object):
    - **firstname** (string): Captain’s first name.
    - **lastname** (string): Captain’s last name (if provided).
  - **email** (string): Captain’s email address.
  - **vehicle** (object):
    - **plate** (string): Vehicle's plate number.
    - **capacity** (number): Vehicle's capacity.
    - **vehicleType** (string): Type of vehicle.

---

## Captain Login (POST /captains/login)

### Description

This endpoint allows registered captains to log in by providing their email and password. If the credentials are correct, a JWT token is issued, which must be used for authentication in future requests.

### Request Body

- **email** (string, required): Captain’s email address (must be a valid email).
- **password** (string, required): Captain’s password (minimum 6 characters).

### Example Response

- **token** (string): A JWT token for authentication.
- **captain** (object):
  - **_id** (string): Unique identifier for the captain.
  - **fullname** (object):
    - **firstname** (string): Captain’s first name.
    - **lastname** (string): Captain’s last name (if provided).
  - **email** (string): Captain’s email address.
  - **vehicle** (object):
    - **plate** (string): Vehicle's plate number.
    - **capacity** (number): Vehicle's capacity.
    - **vehicleType** (string): Type of vehicle.

---

## Get Captain Profile (GET /captains/profile)

### Description

This endpoint allows authenticated captains to retrieve their profile information. The request must include a valid JWT token.

### Example Response

- **_id** (string): Unique identifier for the captain.
- **fullname** (object):
  - **firstname** (string): Captain’s first name.
  - **lastname** (string): Captain’s last name (if provided).
- **email** (string): Captain’s email address.
- **vehicle** (object):
  - **plate** (string): Vehicle's plate number.
  - **capacity** (number): Vehicle's capacity.
  - **vehicleType** (string): Type of vehicle.

---

## Captain Logout (GET /captains/logout)

### Description

This endpoint allows authenticated captains to log out. The system blacklists the token to prevent further use.

### Example Response

- **message** (string): Confirmation message indicating successful logout.

---

## Notes

- JWT tokens must be included in the Authorization header for protected endpoints.
- Passwords are securely hashed before storage.
- Tokens are blacklisted upon logout, ensuring security.

Try it Out:

- **POST** /users/register → Create a new user.
- **POST** /users/login → Authenticate and receive a token.
- **GET** /users/profile → Retrieve authenticated user details.
- **GET** /users/logout → Log out and invalidate the token.
- **POST** /captains/register → Create a new captain.
- **POST** /captains/login → Authenticate and receive a token.
- **GET** /captains/profile → Retrieve authenticated captain details.
- **GET** /captains/logout → Log out and invalidate the token.

