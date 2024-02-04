import { DesktopIcon } from "@icons/Desktop";
import { MobileXIcon } from "@icons/MobileX";

export const BannerMobile = () => {
  return (
    <main className="flex flex-col gap-y-16 p-8">
      <h2 className="text-black/80 dark:text-white/80 text-4xl text-balance text-center font-semibold">
        La aplicación está únicamente disponible en versiones de escritorio
      </h2>
      <div className="flex items-center justify-around [&>*]:size-24 [&>*]:text-neutral-700 dark:[&>*]:text-neutral-300">
        <MobileXIcon />
        <DesktopIcon />
      </div>
      <p className="text-pretty text-black/70 dark:text-white/70 text-lg">
        Esta limitación se debe al soporte que brinda los navegadores móviles a
        la API de JavaScript <code className="bg-[#d0d0d5] dark:bg-[#313537] px-1 rounded-md" >getDisplayMedia()</code>, para más información acerca del
        soporte visita el siguiente link: <a href="https://caniuse.com/?search=getDisplayMedia" target="_blank" rel="noopener noreferrer" className="text-pretty underline underline-offset-2" >Ver soporte</a>.
      </p>
    </main>
  );
};
