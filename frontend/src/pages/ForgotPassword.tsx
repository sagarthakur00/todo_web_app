import { useForm } from "react-hook-form";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { api } from "../api/client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const { register, handleSubmit } = useForm();
  const [token, setToken] = useState("");

  const submit = async (data: any) => {
    const res = await api.post("/reset/forgot", data);
    setToken(res.data.token);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-darkcard p-8 rounded-xl shadow max-w-md w-full space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Forgot Password</h1>

        <form onSubmit={handleSubmit(submit)} className="space-y-3">
          <Input {...register("email")} placeholder="Enter Email" />
          <Button className="w-full">Generate Reset Token</Button>
        </form>

        {token && (
          <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded text-sm">
            <p className="font-semibold">Reset Token:</p>
            <p className="break-all">{token}</p>
          </div>
        )}

        <p className="text-center text-sm">
          Back to{" "}
          <Link to="/login" className="text-primary underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
