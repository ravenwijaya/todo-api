const express = require('express');
const router = express.Router();
const helpers = require("../helpers/todos");
//router.get('/', ), router.post('/', )
router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo);

router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo);

module.exports = router;