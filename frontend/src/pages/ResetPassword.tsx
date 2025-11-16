import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { api } from "../api/client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ResetPassword() {
  const { register, handleSubmit } = useForm();
  const [success, setSuccess] = useState("");

  const submit = async (data: any) => {
    const res = await api.post("/reset/reset", data);
    setSuccess(res.data.message);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.form
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit(submit)}
        className="bg-white dark:bg-darkcard p-8 rounded-xl shadow max-w-md w-full space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Reset Password</h1>

        <Input {...register("token")} placeholder="Reset Token" />
        <Input
          {...register("newPassword")}
          type="password"
          placeholder="New Password"
        />

        <Button className="w-full">Reset Password</Button>

        {success && (
          <p className="text-green-500 font-semibold mt-2 text-center">{success}</p>
        )}

        <p className="text-center text-sm">
          Back to{" "}
          <Link to="/login" className="text-primary underline">
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
}
