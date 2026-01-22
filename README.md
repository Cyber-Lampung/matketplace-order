Ini adalah sebuah source code untuk menghendel authentication

# CRUD Base Backend

## Features

- Auth (JWT + httpOnly cookie)
- CRUD basic
- Layered architecture
- Send Verification Code
- auth endpoint
- security system
- endpoint protected
- mcv model arsitectur
- limit hit endpoint

## Tech Stack

- Node.js
- Express.js
- MySQL

## How to Run

npm install => for install dependencys
npm run dev => for runing server local
vercel dev => for runing server production local testing
vercel --prod => deploy or update production command

# Documentation

    # endpoint register

        ### 2. Create User

        Contoh request dengan Body (POST).

        - **URL:** `/users/register`
        - **Method:** `POST`
        - **Headers:** `Content-Type: application/json`
        - **Body:**
        ```json
        {
            "email": "test@mail.com",
            "username" : "test",
            "password": "test1234"
        }
        ```
        - **Error Response:**
        - **Code:** 400 Bad Request
        - **Content:** `{ "error": "Username is required" }`

    # endpoint login

        Contoh request dengan Bodu ( POST ),

        - **URL: ** `/users/login`
        - **METHOD: ** `POST`
        - **Headers: ** `Content-Type: application/json`
        - **Body: **
        ```json{
            "email": "test@gmail",
            "password": "test1234"
        }```

        - ** Error Response **
        - ** Code: ** 404 User Not Found
        - ** Content: ** `{statusCode : 404, status: false, message: "invalid user not found"}`
