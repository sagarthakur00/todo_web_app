import Todo from "../models/todo.model";

export const createTodo = async (req: any, res: any) => {
  const todo = await Todo.create({
    userId: req.user.id,
    title: req.body.title
  });

  res.json(todo);
};

export const getTodos = async (req: any, res: any) => {
  const todos = await Todo.find({ userId: req.user.id });
  res.json(todos);
};

export const updateTodo = async (req: any, res: any) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  res.json(todo);
};

export const deleteTodo = async (req: any, res: any) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
