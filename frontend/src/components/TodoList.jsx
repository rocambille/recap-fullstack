import { useEffect, useRef, useState } from "react";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/todos`)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <ul>
      <li>
        <form
          onSubmit={(event) => {
            event.preventDefault();

            fetch(`${import.meta.env.VITE_BACKEND_URL}/todos`, {
              method: "post",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                action: inputRef.current.value,
              }),
            }).then((response) => {
              setTodos([
                { action: inputRef.current.value, checked: 0 },
                ...todos,
              ]);
              inputRef.current.value = "";
              console.warn(
                response.status /* , response.headers.get("Location") <= not working :/ */
              );
            });
          }}
        >
          <input ref={inputRef} type="text" />
          <button type="submit">+</button>
        </form>
      </li>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo
            id={todo.id}
            checked={todo.checked}
            action={todo.action}
            toggle={() => {}}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
