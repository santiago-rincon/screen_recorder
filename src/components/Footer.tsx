export const Footer = () => {
  return (
    <footer className="flex transition-colors place-content-center gap-x-1 items-center h-16 bg-slate-300 dark:bg-neutral-900 w-full [&>*]:text-black/80 [&>*]:dark:text-white/80 border-t border-black/20 dark:border-white/20">
      <span className="text-base">Herramienta realizada por:</span>
      <a
        href="https://github.com/santiago-rincon"
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
      >
         Cristian Santiago Rincón
      </a>
    </footer>
  );
};
