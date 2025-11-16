import { useTheme } from "../store/theme";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <motion.button
      onClick={toggle}
      className="p-2 rounded-lg bg-gray-200 dark:bg-darkcard"
      whileTap={{ scale: 0.9 }}
    >
      {dark ? (
        <SunIcon className="h-5 w-5 text-yellow-400" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-800" />
      )}
    </motion.button>
  );
}
