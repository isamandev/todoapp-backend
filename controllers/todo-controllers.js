const Todo = require('../models/todo')

const getTodos = async (req, res, next) => {
    const todos = await Todo.find().exec()
    res.json(todos)
}
const createTodo = async (req, res, next) => {
    const title = req.body.title

    const createTodo = new Todo({ title: title })

    await createTodo.save()
    res.status(201).json({ message: "Todo Created" })
}

exports.getTodos = getTodos
exports.createTodo = createTodo