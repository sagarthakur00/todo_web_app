import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { AuthAPI } from "../api/auth";
import { SignupSchema } from "../api/schemas";
import { useAuth } from "../store/auth";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { setToken } = useAuth();
  const nav = useNavigate();

  const submit = async (data: any) => {
    console.log("Form data:", data);
    const parsed = SignupSchema.safeParse(data);
    console.log("Zod validation result:", parsed);
    
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.errors.forEach((e) => {
        const key = e.path && e.path.length > 0 ? String(e.path[0]) : "_form";
        if (!next[key]) next[key] = e.message;
      });
      setErrors(next);
      return;
    }

    setErrors({});
    const res = await AuthAPI.signup(parsed.data);
    setToken(res.data.token);
    nav("/todos");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit(submit)}
        className="bg-white dark:bg-darkcard p-8 rounded-xl shadow max-w-md w-full space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Create Account</h1>

        <div>
          <Input {...register("name")} placeholder="Full Name" />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <Input {...register("email")} placeholder="Email" type="email" />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <Input {...register("password")} placeholder="Password" type="password" />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
          )}
        </div>

        <Button type="submit" className="w-full">Signup</Button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-primary underline">
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
}
