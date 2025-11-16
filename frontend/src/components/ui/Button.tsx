import { motion } from "framer-motion";

export default function Button({ children, className, ...props }: any) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 rounded bg-primary text-white ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
