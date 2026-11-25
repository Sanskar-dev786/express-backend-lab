# Lesson 16 — MongoDB Database Connection

## Topics Covered

- MongoDB connection URI
- Mongoose database connection
- Async/await
- Connection states
- Environment variables using dotenv
- .env and .gitignore
- Modular database configuration
- Connection error handling
- Successful and failed connection testing

## Running the Application

Install dependencies from the parent repository using `npm install`.

Inside this lesson folder, copy `.env.example` to `.env`, ensure MongoDB is running, and execute `node index.js`.

## Key Takeaways

- mongoose.connect() returns a Promise.
- Mongoose maintains an open database connection.
- mongoose.disconnect() closes database connections.
- Sensitive credentials should not be committed to GitHub.
- Database connection logic should be separated from application logic.
- Application startup should depend on a successful database connection.

## Next Lesson

Lesson 17 — Mongoose CRUD Operations.