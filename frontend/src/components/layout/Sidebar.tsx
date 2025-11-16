import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const link = "block px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700";

  return (
    <div className="w-60 h-screen bg-white dark:bg-darkcard shadow-lg p-4 space-y-3">
      <h2 className="text-xl font-bold">Todo Dashboard</h2>

      <NavLink to="/todos" className={link}>
        Todos
      </NavLink>
      <NavLink to="/reset" className={link}>
        Reset Password
      </NavLink>
    </div>
  );
}
