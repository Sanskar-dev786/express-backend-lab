# Lesson 14 — MongoDB Fundamentals

## Overview

This lesson focuses on MongoDB fundamentals, local database setup, MongoDB Shell (mongosh), CRUD operations, and query operators.

## Learning Objectives

- Understand NoSQL databases.
- Install and configure MongoDB locally.
- Understand databases, collections, and documents.
- Perform CRUD operations using mongosh.
- Understand `$set` and `$in` operators.
- Understand MongoDB operation responses.
- Identify and resolve common MongoDB errors.

## 1. What is MongoDB?

MongoDB is a NoSQL, document-oriented database that stores data in BSON (Binary JSON) documents.

### SQL vs MongoDB

| SQL | MongoDB |
|---|---|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |
| Primary Key | `_id` |
| Fixed Schema (typically) | Flexible Schema |
| JOIN | `$lookup` |

## 2. MongoDB Installation (macOS ARM64)

Install MongoDB using Homebrew:

```bash
brew tap mongodb/brew
brew trust mongodb/brew
brew install mongodb-community@8.0
```

Verify installation:

```bash
mongod --version
mongosh --version
```

Start MongoDB:

```bash
brew services start mongodb-community@8.0
```

Check service status:

```bash
brew services list
```

Stop MongoDB:

```bash
brew services stop mongodb-community@8.0
```

## 3. MongoDB Shell

Connect to the local MongoDB server:

```bash
mongosh
```

Default connection URI:

```text
mongodb://127.0.0.1:27017
```

## 4. Database and Collection Commands

```js
show dbs

use bootcamp_db

db

db.createCollection("todos")

show collections
```

## 5. MongoDB Document Structure

```js
{
    _id: ObjectId("6b06882cda6f0330c02178eb"),
    title: "Learn Express",
    description: "Revise Express fundamentals",
    completed: true
}
```

MongoDB automatically generates a unique `_id` when one is not provided.

An ObjectId is a 12-byte identifier commonly represented as a 24-character hexadecimal string.

## 6. CRUD Operations

CRUD stands for Create, Read, Update, and Delete.

### CREATE

Insert a single document:

```js
db.todos.insertOne({
    title: "Learn Express",
    description: "Revise Express fundamentals",
    completed: true
})
```

Insert multiple documents:

```js
db.todos.insertMany([
    {
        title: "Learn MongoDB",
        completed: false
    },
    {
        title: "Learn Mongoose",
        completed: false
    }
])
```

### READ

Retrieve all documents:

```js
db.todos.find({})
```

Retrieve matching documents:

```js
db.todos.find({completed: true})
```

Retrieve a single document:

```js
db.todos.findOne({title: "Learn Express"})
```

`find()` returns a cursor over matching documents, while `findOne()` returns a single document or `null`.

### UPDATE

Update a single document:

```js
db.todos.updateOne(
    {title: "Learn MongoDB"},
    {$set: {completed: true}}
)
```

Update multiple documents:

```js
db.todos.updateMany(
    {completed: false},
    {$set: {completed: true}}
)
```

The `$set` operator updates specific fields without replacing the entire document.

### DELETE

Delete a single document:

```js
db.todos.deleteOne({title: "Learn Zod"})
```

Delete multiple matching documents:

```js
db.todos.deleteMany({completed: false})
```

Delete all documents:

```js
db.todos.deleteMany({})
```

**Warning:** An empty filter in `deleteMany()` deletes every document in the collection.

## 7. Query Operators

### `$in` Operator

Matches documents where a field contains any of the specified values.

```js
db.todos.find({
    title: {
        $in: ["Learn Express", "Learn MongoDB"]
    }
})
```

Using `$in` with `updateMany()`:

```js
db.todos.updateMany(
    {
        title: {
            $in: ["Learn Express", "Learn MongoDB"]
        }
    },
    {$set: {completed: false}}
)
```

| Operator | Type | Purpose |
|---|---|---|
| `$in` | Query operator | Match multiple possible values |
| `$set` | Update operator | Modify specific fields |

## 8. Understanding MongoDB Responses

Example update response:

```js
{
    acknowledged: true,
    matchedCount: 2,
    modifiedCount: 2,
    upsertedCount: 0
}
```

| Field | Description |
|---|---|
| acknowledged | Whether the operation was acknowledged |
| insertedId | ID of an inserted document, when returned |
| insertedIds | IDs of multiple inserted documents |
| matchedCount | Number of matching documents |
| modifiedCount | Number of modified documents |
| deletedCount | Number of deleted documents |
| upsertedCount | Number of documents inserted through an upsert |

Note: `matchedCount` can be greater than `modifiedCount` when matching documents already contain the requested values.

## 9. Common Errors and Solutions

| Error | Cause | Solution |
|---|---|---|
| `db.find is not a function` | Missing collection name | Use `db.todos.find()` |
| `df is not defined` | Typing mistake | Use `db` instead of `df` |
| `findOne is not defined` | Comma instead of dot | Use `db.todos.findOne()` |
| `matchedCount: 0` | Incorrect collection name or unmatched filter | Verify collection and filter |
| `Update document requires atomic operators` | Missing or invalid update argument | Provide `$set` with updated fields |
| `UpdateMany is not a function` | Incorrect capitalization | Use `updateMany()` |
| `Unknown modifier: $in` | Using a query operator as an update operator | Use `$in` inside the filter |
| Duplicate object keys | Last key overwrites previous values | Use `$in` to match multiple values |

## 10. Project Structure

```text
14-mongodb-fundamentals/
├── README.md
└── crud.mongodb.js
```

- `README.md` — MongoDB concepts and documentation.
- `crud.mongodb.js` — MongoDB shell commands for practical revision.

## 11. Learning Outcomes

- [x] MongoDB installation and configuration
- [x] MongoDB Shell
- [x] Databases and collections
- [x] Document structure and ObjectId
- [x] Create operations
- [x] Read operations
- [x] Update operations
- [x] Delete operations
- [x] Query and update operators
- [x] Error handling and debugging

## Next Lesson

Lesson 15 — Mongoose Fundamentals

Topics:

- Object Document Mapper (ODM)
- MongoDB vs Mongoose
- Connecting Node.js with MongoDB
- Mongoose schemas and models
- Schema types
- Required fields and default values
- Timestamps
- Mongoose CRUD operations