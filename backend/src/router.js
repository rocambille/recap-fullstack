const express = require("express");

const router = express.Router();

const sayHello = require("./services/sayHello");

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const todoControllers = require("./controllers/todoControllers");

router.use(sayHello);

router.get("/todos", todoControllers.browse);
router.get("/todos/:id", todoControllers.read);
router.put("/todos/:id", todoControllers.edit);
router.post("/todos", todoControllers.add);
router.delete("/todos/:id", todoControllers.destroy);

module.exports = router;
