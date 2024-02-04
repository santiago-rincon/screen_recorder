import { MoonIcon } from "@/icons/Moon";
import { SunIcon } from "@/icons/Sun";
import { GithubIcon } from "@icons/Github";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const preferDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    preferDark ? setIsDark(true) : setIsDark(false);
    document.body.classList.toggle("dark", preferDark);
  }, []);
  const handleClick = () => {
    const dark = isDark;
    setIsDark(!isDark);
    document.body.classList.toggle("dark", !dark);
  };
  return (
    <header className="flex transition-colors justify-between items-center px-4 md:px-10 h-20 bg-slate-300 dark:bg-neutral-900 w-full border-b border-black/20 dark:border-white/20">
      <h1 className="text-xl md:text-4xl font-bold text-black/80 dark:text-white/80">
        🎥 Screen Recorder
      </h1>
      <div className="flex justify-center items-center gap-x-5 border-s border-black/20 dark:border-white/20 ps-4">
        <button onClick={handleClick}>
          {isDark ? (
            <SunIcon className="size-6 md:size-8 text-black/70 dark:text-white/80" />
          ) : (
            <MoonIcon className="size-6 md:size-8 text-black/70 dark:text-white/80" />
          )}
        </button>
        <a
          href="https://github.com/santiago-rincon/screen_recorder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="size-6 md:size-8 text-black/70 dark:text-white/80" />
        </a>
      </div>
    </header>
  );
};
