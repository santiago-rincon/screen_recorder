export const Button = ({
  children,
  onClick,
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className="bg-gray-500 text-white/80 border border-gray-900/60 dark:border-black/70 dark:bg-neutral-600 max-w-fit px-4 py-1 rounded-2xl hover:scale-105 transition text-lg disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
