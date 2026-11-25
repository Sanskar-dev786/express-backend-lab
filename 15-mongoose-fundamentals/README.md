# Lesson 15 — Mongoose Fundamentals

## Overview

This lesson covers the fundamentals of Mongoose, an Object Document Mapper (ODM) for MongoDB and Node.js.

## Topics Covered

- Introduction to Mongoose and ODM
- MongoDB vs Mongoose
- Mongoose schemas and models
- Schema data types
- Nested objects and arrays
- Automatic type casting
- Required fields and default values
- Schema validation
- Timestamps
- Model imports and exports
- Document validation using async/await and try/catch

## Project Structure

```text
15-mongoose-fundamentals/
├── student.model.js
├── book.model.js
├── index.js
└── README.md
```

## Installation

```bash
npm install mongoose
```

## Running the Project

```bash
node index.js
```

## Practical Exercises

### Student Model

- Schema creation
- String and numeric validation
- Required fields
- Default values
- Nested address objects
- Automatic type casting
- Timestamp configuration

### Book Model

- Independent schema and model creation
- Required title and author
- Price and rating validation
- Default category and stock status
- String-to-number conversion

## Validation

The `validate()` method was used to test document validation without connecting to MongoDB.

## Errors Encountered and Resolved

| Error | Lesson Learned |
|---|---|
| Model is not a constructor | Match CommonJS import and export syntax |
| ReferenceError | Check variable declarations and spelling |
| SyntaxError | Check JavaScript syntax and commas |
| ValidationError | Provide values that satisfy schema rules |

## Key Takeaways

- MongoDB is a database, whereas Mongoose is an ODM library.
- A schema defines document structure and validation rules.
- A model provides an interface for database operations.
- Mongoose automatically casts compatible data types.
- Default values are applied to undefined fields.
- Timestamps track document creation and modification.
- Creating a document instance does not automatically save it to MongoDB.

## Next Lesson

Lesson 16 — MongoDB Database Connection using Mongoose.