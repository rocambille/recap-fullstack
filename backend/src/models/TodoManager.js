const AbstractManager = require("./AbstractManager");

class TodoManager extends AbstractManager {
  constructor() {
    super({ table: "todo" });
  }

  insert(todo) {
    return this.connection.query(
      `insert into ${this.table} (action) values (?)`,
      [todo.action]
    );
  }

  update(todo) {
    return this.connection.query(
      `update ${this.table} set action = ? where id = ?`,
      [todo.action, todo.id]
    );
  }
}

module.exports = TodoManager;
