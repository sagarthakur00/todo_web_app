import { api } from "./client";

export const TodoAPI = {
  list: () => api.get("/todos"),
  create: (data: any) => api.post("/todos", data),
  update: (id: string, data: any) => api.put(`/todos/${id}`, data),
  delete: (id: string) => api.delete(`/todos/${id}`)
};
