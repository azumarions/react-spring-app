import { useEffect } from "react";
import { useTodo } from "../hooks/useTodo";

const TestPage = () => {
  const { todos, loading, error, fetchTodos } = useTodo();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error.message}</div>;

  return (
    <div>
      <h2>Todo一覧</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
            {todo.completed ? " ✅" : ""}
            <div>{todo.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;