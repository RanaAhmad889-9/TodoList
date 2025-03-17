import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ item,ondel }) => {
  return (
    <div className={styles.itemsContainer}>
      {item.map((item,index) => (
        <TodoItem index={index} key = {item.name} date={item.date} name={item.name} ondel={ondel}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
