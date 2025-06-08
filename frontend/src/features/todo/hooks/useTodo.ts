import { useCallback, useState } from "react";
import * as todoApi from "../../../repositories/todoApi";
import type { Todo } from "../../../models/todo";

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // 一覧取得
  const fetchTodos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await todoApi.getTodos();
      setTodos(data ?? []);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  // 詳細取得
  const fetchTodo = useCallback(async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      return await todoApi.getTodo(id);
    } catch (e) {
      setError(e as Error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // 作成
  const createTodo = useCallback(async (todo: Omit<Todo, "id">) => {
    setLoading(true);
    setError(null);
    try {
      const newTodo = await todoApi.createTodo(todo);
      setTodos((prev) => (newTodo ? [...prev, newTodo] : prev));
      return newTodo;
    } catch (e) {
      setError(e as Error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // 更新
  const updateTodo = useCallback(async (todo: Todo) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await todoApi.updateTodo(todo);
      setTodos((prev) =>
        updated ? prev.map((t) => (t.id === updated.id ? updated : t)) : prev
      );
      return updated;
    } catch (e) {
      setError(e as Error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // 削除
  const deleteTodo = useCallback(async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      await todoApi.deleteTodo(id);
      setTodos((prev) => prev.filter((t) => t.id !== id));
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    todos,
    loading,
    error,
    fetchTodos,
    fetchTodo,
    createTodo,
    updateTodo,
    deleteTodo,
  };
};
