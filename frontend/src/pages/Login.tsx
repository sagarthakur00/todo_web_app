import { useForm } from "react-hook-form";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { AuthAPI } from "../api/auth";
import { LoginSchema } from "../api/schemas";
import { useAuth } from "../store/auth";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { setToken } = useAuth();
  const nav = useNavigate();

  const submit = async (data: any) => {
    // Zod validation
    const parsed = LoginSchema.safeParse(data);
    if (!parsed.success) {
      alert(parsed.error.errors[0].message);
      return;
    }

    const res = await AuthAPI.login(parsed.data);
    setToken(res.data.token);
    nav("/todos");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.form
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit(submit)}
        className="bg-white dark:bg-darkcard p-8 rounded-xl shadow max-w-md w-full space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <Input {...register("email")} placeholder="Email" type="email" />
        <Input {...register("password")} placeholder="Password" type="password" />

        <Button className="w-full">Login</Button>

        <div className="flex justify-between text-sm mt-2">
          <Link to="/signup" className="text-primary underline">
            Create account
          </Link>
          <Link to="/forgot" className="text-primary underline">
            Forgot password?
          </Link>
        </div>
      </motion.form>
    </div>
  );
}
