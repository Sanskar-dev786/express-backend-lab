# Lesson 18 — Error Handling and Validation

## Objective

Implement robust API validation and centralized error handling using Express.js, Mongoose and Zod.

## Concepts Covered

- MongoDB ObjectId validation
- Mongoose ValidationError and CastError
- Zod schema validation
- Request validation middleware
- Centralized error-handling middleware
- Error propagation using next(error)
- Middleware execution order
- Asynchronous error handling

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /health | Check server health |
| GET | /products/:id | Retrieve a product by ID |
| POST | /products | Create a validated product |

## HTTP Status Codes

- 200 — Successful request
- 201 — Product created
- 400 — Invalid input or ObjectId
- 404 — Product not found
- 500 — Internal server error

## Environment Configuration

Create a `.env` file using `.env.example`.

```ini
MONGODB_URI=mongodb://127.0.0.1:27017/mongoose_practice
PORT=3000
```

## Run the Application

Install the project dependencies from the parent directory, ensure MongoDB is running, and execute:

```bash
node index.js
```

## Learning Outcome

Implemented multiple validation layers and centralized error handling to improve API reliability, maintainability and consistency.