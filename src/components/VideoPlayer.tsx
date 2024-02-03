import { useRecorderStore } from "@store/recorderStore";
import { Button } from "@components/Button";
import { DownloadIcon } from "@icons/Download";

export const VideoPlayer = () => {
  const { updatesrcData, srcData } = useRecorderStore();
  return (
    <div className="flex flex-col items-center gap-y-5 my-7">
      <h2 className="text-3xl font-bold text-black/80 dark:text-white/80">
        Aquí está tu video!!
      </h2>
      <video
        src={srcData.blob}
        className="w-3/4 rounded-lg border-2 border-gray-900/60 dark:border-black/70 shadow-md"
        controls
      ></video>
      <div className="w-3/4 flex items-center justify-around">
        <a
          className="flex gap-x-1 bg-gray-500 text-white/80 border border-gray-900/60 dark:border-black/70 dark:bg-neutral-600 max-w-fit px-4 py-1 rounded-2xl hover:scale-105 transition text-lg"
          href={srcData.blob}
          download={srcData.fileName}
        >
          <DownloadIcon />
          Descargar video
        </a>
        <Button
          onClick={() => {
            updatesrcData({
              blob: "",
              fileName: "",
            });
          }}
        >
          Grabar nuevo video
        </Button>
      </div>
    </div>
  );
};
