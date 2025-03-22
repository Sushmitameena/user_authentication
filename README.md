

# JWT Authentication API with Role-Based Access
# This project is a Node.js REST API with JWT-based authentication, password hashing using bcrypt, and role-based access control (RBAC). It allows users to register, log in, and access protected routes based on their roles (user or admin).

# Tech Stack
# Node.js + Express.js – Server and routing framework.

# MongoDB – NoSQL database for storing user data.

# bcrypt – For hashing and comparing passwords.

# jsonwebtoken (JWT) – For creating and verifying authentication tokens.

# dotenv – To manage environment variables.

# CORS – To enable cross-origin requests.

# /config
  └── db.js           # MongoDB connection setup
/models
  └── User.js         # User schema model
/routes
  ├── auth.js         # Authentication routes
  ├── profile.js      # Protected profile route
  └── admin.js        # Admin-only routes
/server.js            # Main server file
/package.json         # Dependencies
.env                  # Environment variables


# Installation and Setup
1.Clone the Repository
git clone https://github.com/Sushmitameena/user_authentication
cd <repository_folder>

2️. Install Dependencies--
npm install

3.Configure Environment Variables
Create a .env file in the root folder with the following content:

MONGO_URI=mongodb://localhost:27017/authDB
JWT_SECRET=supersecretkey
PORT=5000

4.Start the Server-

npm start
The server will run at:
http://localhost:5000



# API Endpoints
1️. User Registration
Creates a new user with the specified role (user by default or admin)

Endpoint:POST /api/auth/register

Request Body:
{
  "username": "testuser",
  "password": "password123",
  "role": "admin"   // or "user"
}
Response:

{
  "msg": "User registered successfully"
}

2.User Login
 Logs in a registered user and returns a JWT token.
Endpoint:
POST /api/auth/login

Request Body:
{
  "username": "testuser",
  "password": "password123"
}
Response:
{
  "token": "your_jwt_token_here"
}

3.Protected Profile Route
 Accessible to both user and admin roles with a valid token.
 Endpoint:GET /api/profile

In Headers send this-
Authorization: Bearer your_jwt_token_here

Response:
{
  "msg": "Welcome to your profile",
  "user": {
    "id": "user_id",
    "role": "user"
  }
}


4. Admin-Only Route
Only accessible to admin users with a valid token.
Endpoint:GET /api/admin

Headers:
Authorization: Bearer your_admin_jwt_token_here

Response:
{
  "msg": "Admin dashboard",
  "user": {
    "id": "admin_id",
    "role": "admin"
  }
}

# Getting an Admin JWT Token

1.Register an Admin User
To generate an admin token, first, register an admin account:
POST /api/auth/register

{
  "username": "adminuser",
  "password": "adminpassword",
  "role": "admin"
}

2. Log in as Admin
Login with admin credentials
POST /api/auth/login
{
  "username": "adminuser",
  "password": "adminpassword"
}
Response:{
  "token": "your_admin_jwt_token_here"
}












