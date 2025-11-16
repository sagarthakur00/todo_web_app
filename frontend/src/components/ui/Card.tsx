export default function Card({ children, className }: any) {
  return (
    <div className={`p-4 rounded shadow bg-white dark:bg-darkcard ${className}`}>
      {children}
    </div>
  );
}
