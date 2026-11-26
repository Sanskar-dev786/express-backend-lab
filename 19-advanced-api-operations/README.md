# Lesson 19 — Advanced API Operations

## Overview

This lesson demonstrates advanced REST API operations using Express.js, MongoDB, Mongoose and Zod. It extends the previous lessons by implementing filtering, searching, sorting, pagination and query parameter validation.

## Learning Objectives

- Understand query parameters in Express.js.
- Implement dynamic filtering using Mongoose.
- Implement case-insensitive searching using `$regex`.
- Sort documents in ascending and descending order.
- Implement pagination using `skip()` and `limit()`.
- Validate query parameters using Zod.
- Combine multiple query operations in a single endpoint.
- Handle errors using centralized error middleware.

## Technology Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Zod
- dotenv
- Postman

## Project Structure

```text
19-advanced-api-operations/
├── middleware/
│   ├── error.middleware.js
│   └── validate.middleware.js
├── models/
│   └── product.model.js
├── schemas/
│   ├── product.schema.js
│   └── product.query.schema.js
├── db.js
├── index.js
├── .env
├── .env.example
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/health` | Check server status |
| GET | `/products` | Retrieve products with advanced query operations |
| GET | `/products/:id` | Retrieve a product by ID |
| POST | `/products` | Create a new product |

## Supported Query Parameters

| Parameter | Description | Default |
|---|---|---|
| `category` | Filter products by category | Optional |
| `search` | Search products by name | Optional |
| `sort` | Sort matching products | `newest` |
| `page` | Current page number | `1` |
| `limit` | Number of products per page | `5` |

## 1. Filtering

Retrieve products belonging to a specific category.

```http
GET /products?category=Electronics
```

```js
const filter = {};

if (category) {
    filter.category = category;
}
```

## 2. Searching

Search products using case-insensitive regular expressions.

```http
GET /products?search=mouse
```

```js
if (search) {
    const escapedSearch = search.replace(
        /[.*+?^${}()|[\]\\]/g, "\\$&"
    );

    filter.name = {
        $regex: escapedSearch,
        $options: "i"
    };
}
```

Special regex characters are escaped to support literal text searching.

## 3. Sorting

| Sorting option | Description |
|---|---|
| `price_asc` | Lowest price first |
| `price_desc` | Highest price first |
| `newest` | Recently created products first |

```http
GET /products?sort=price_asc
```

An additional `_id` sorting condition ensures consistent ordering when primary sorting values are equal.

## 4. Pagination

Pagination retrieves a limited number of documents per request.

```http
GET /products?page=2&limit=5
```

Pagination formula:

```js
const skip = (page - 1) * limit;
```

Mongoose query:

```js
const products = await Product.find(filter)
    .sort(sortOption)
    .skip(skip)
    .limit(limit);
```

## 5. Query Parameter Validation

Zod validates incoming query parameters before executing database operations.

Validation rules:

- Category must be a non-empty string when provided.
- Search must contain between 1 and 100 characters.
- Sorting must match a supported sorting option.
- Page must be an integer between 1 and 100000.
- Limit must be an integer between 1 and 100.
- Invalid query parameters return HTTP status 400.

## 6. Combined API Operations

Filtering, searching, sorting and pagination can be combined in a single request.

```http
GET /products?category=Electronics&search=mouse&sort=price_asc&page=1&limit=2
```

Example response:

```json
{
    "page": 1,
    "limit": 2,
    "totalProducts": 1,
    "totalPages": 1,
    "products": [
        {
            "name": "WirelessMouse",
            "price": 999,
            "category": "Electronics",
            "stock": 50,
            "isAvailable": true
        }
    ]
}
```

The actual response includes additional stored document fields, such as `_id` and timestamps.

## HTTP Status Codes

| Status Code | Description |
|---|---|
| 200 | Successful retrieval |
| 201 | Product created successfully |
| 400 | Invalid input or query parameters |
| 404 | Product not found |
| 500 | Internal server error |

## Installation and Setup

Install dependencies from the parent project directory:

```bash
npm install
```

Navigate to the lesson directory:

```bash
cd 19-advanced-api-operations
```

Create the environment configuration:

```bash
cp .env.example .env
```

Configure the environment variables:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/mongoose_practice
PORT=3000
```

Start MongoDB on macOS if it is not already running:

```bash
brew services start mongodb-community@8.0
```

Start the application:

```bash
node index.js
```

Server URL:

```text
http://localhost:3000
```

## API Testing

Use Postman to verify:

- Product retrieval
- Category filtering
- Case-insensitive searching
- Ascending and descending sorting
- Pagination
- Combined query operations
- Invalid query parameter handling
- Centralized error handling

## Key Takeaways

- Query parameters make REST APIs more flexible.
- Dynamic filter objects allow multiple conditions to work together.
- Pagination reduces unnecessary data retrieval.
- Zod prevents invalid query parameters from reaching database operations.
- Mongoose supports chaining multiple query operations.
- Centralized error handling improves API maintainability.

## Next Lesson

Lesson 20 — Build a complete TODO REST API using Node.js, Express.js, MongoDB, Mongoose and Zod.