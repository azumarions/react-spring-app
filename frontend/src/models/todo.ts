export type Todo = {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  [key: string]: unknown; // 拡張用
}