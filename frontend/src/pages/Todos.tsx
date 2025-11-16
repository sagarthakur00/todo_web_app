import DashboardLayout from "../components/layout/DashboardLayout";
import { TodoAPI } from "../api/todos";
import { TodoSchema } from "../api/schemas";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Card from "../components/ui/Card";
import { motion } from "framer-motion";

export default function Todos() {
  const { register, handleSubmit, reset } = useForm();

  const { data, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => (await TodoAPI.list()).data,
  });

  const addTodo = useMutation({
    mutationFn: async (d: any) => {
      // Zod validation
      const parsed = TodoSchema.safeParse(d);
      if (!parsed.success) {
        alert(parsed.error.errors[0].message);
        return;
      }
      return TodoAPI.create(parsed.data);
    },
    onSuccess: () => {
      reset();
      refetch();
    },
  });

  const toggleTodo = useMutation({
    mutationFn: async (todo: any) =>
      TodoAPI.update(todo._id, { completed: !todo.completed }),
    onSuccess: () => refetch(),
  });

  const deleteTodo = useMutation({
    mutationFn: async (id: string) => TodoAPI.delete(id),
    onSuccess: () => refetch(),
  });

  return (
    <DashboardLayout>
      <div className="max-w-xl mx-auto space-y-4">
        <form
          onSubmit={handleSubmit((d) => addTodo.mutate(d))}
          className="flex gap-3"
        >
          <Input {...register("title")} placeholder="Add a task..." />
          <Button>Add</Button>
        </form>

        <div className="space-y-3">
          {data?.map((todo: any) => (
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              key={todo._id}
            >
              <Card className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo.mutate(todo)}
                  />
                  <span className={todo.completed ? "line-through" : ""}>
                    {todo.title}
                  </span>
                </div>

                <button
                  className="text-red-500 text-sm"
                  onClick={() => deleteTodo.mutate(todo._id)}
                >
                  Delete
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
