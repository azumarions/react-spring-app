import type { Todo } from "../models/todo";
import { apiGet, apiPost, apiPut, apiDelete } from "./baseApi";

const TODO_ENDPOINT = "/todo";

// 一覧取得
export const getTodos = () => apiGet<Todo[]>(TODO_ENDPOINT);

// 詳細取得
export const getTodo = (id: number) => apiGet<Todo>(`${TODO_ENDPOINT}/${id}`);

// 作成
export const createTodo = (todo: Omit<Todo, "id">) =>
  apiPost<Todo>(TODO_ENDPOINT, todo);

// 更新
export const updateTodo = (todo: Todo) =>
  apiPut<Todo>(`${TODO_ENDPOINT}/${todo.id}`, todo);

// 削除
export const deleteTodo = (id: number) =>
  apiDelete<void>(`${TODO_ENDPOINT}/${id}`);
