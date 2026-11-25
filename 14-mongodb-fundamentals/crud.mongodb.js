
// Lesson 14 - MongoDB Fundamentals
// Execute these commands individually inside mongosh.

// ==============================
// 1. DATABASE AND COLLECTION
// ==============================

// show dbs
// use bootcamp_db
// db
// db.createCollection("todos")
// show collections

// ==============================
// 2. CREATE OPERATIONS
// ==============================

// db.todos.insertOne({
//     title: "Learn Express",
//     description: "Revise Express fundamentals",
//     completed: true
// })

// db.todos.insertMany([
//     {
//         title: "Learn MongoDB",
//         description: "Practice CRUD operations",
//         completed: false
//     },
//     {
//         title: "Learn Zod",
//         description: "Understand schema validation",
//         completed: true
//     },
//     {
//         title: "Learn Mongoose",
//         description: "Connect Node.js with MongoDB",
//         completed: false
//     }
// ])

// ==============================
// 3. READ OPERATIONS
// ==============================

// db.todos.find({})
// db.todos.find({completed: true})
// db.todos.find({completed: false})
// db.todos.findOne({title: "Learn Zod"})
// db.todos.findOne({title: "Learn Python"})

// ==============================
// 4. UPDATE OPERATIONS
// ==============================

// db.todos.updateOne(
//     {title: "Learn MongoDB"},
//     {$set: {completed: false}}
// )

// db.todos.updateMany(
//     {completed: false},
//     {$set: {completed: true}}
// )

// ==============================
// 5. QUERY OPERATOR ($in)
// ==============================

// db.todos.find({
//     title: {$in: ["Learn Express", "Learn MongoDB"]}
// })

// db.todos.updateMany(
//     {title: {$in: ["Learn Express", "Learn MongoDB"]}},
//     {$set: {completed: false}}
// )

// ==============================
// 6. DELETE OPERATIONS
// ==============================

// db.todos.deleteOne({title: "Learn Zod"})
// db.todos.deleteOne({title: "Learn Python"})
// db.todos.deleteMany({completed: false})

// Warning: Deletes all documents
// db.todos.deleteMany({})

// ==============================
// 7. VERIFY DOCUMENTS
// ==============================

// db.todos.find({})
