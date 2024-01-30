export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-gray-500 text-white/80 border border-gray-900/60 dark:border-black/70 dark:bg-neutral-600 max-w-fit px-4 py-1 rounded-2xl hover:scale-105 transition">
      {children}
    </button>
  );
};
