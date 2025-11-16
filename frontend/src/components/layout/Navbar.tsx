import ThemeToggle from "../ThemeToggle";
import { useAuth } from "../../store/auth";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <div className="w-full flex justify-between items-center px-6 py-3 bg-white dark:bg-darkcard shadow">
      <h2 className="text-lg font-bold">Dashboard</h2>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <button onClick={logout} className="text-sm underline">
          Logout
        </button>
      </div>
    </div>
  );
}
