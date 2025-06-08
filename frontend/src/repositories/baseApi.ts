// task: spring用に変更
const BASE_URL = "http://localhost:8080/api";

// comment: request core
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type RequestBody = Record<string, unknown> | null;

const request = async <T = unknown>(
  endpoint: string,
  method: HttpMethod = "GET",
  body: RequestBody = null
): Promise<T | null> => {
  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, config);
  if (!res.ok) {
    throw new Error(`APIエラー: ${res.status}`);
  }
  return res.status !== 204 ? res.json() : null;
};

export const apiGet = <T = unknown>(endpoint: string) => request<T>(endpoint, "GET");
export const apiPost = <T = unknown>(endpoint: string, body: RequestBody) => request<T>(endpoint, "POST", body);
export const apiPut = <T = unknown>(endpoint: string, body: RequestBody) => request<T>(endpoint, "PUT", body);
export const apiDelete = <T = unknown>(endpoint: string) => request<T>(endpoint, "DELETE");
