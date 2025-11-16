import { useAuth } from "../store/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthGuard = () => {
  const { token } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    if (!token) nav("/login");
  }, [token]);
};
