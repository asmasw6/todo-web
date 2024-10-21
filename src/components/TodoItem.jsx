import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {

    setTodos(todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      ));
  }


  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={item.done? styles.completed: ""} onClick={() => handleClick(item.name)}>{item.name}</span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deletButton}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
