import { FileIcon } from "@/icons/File";
import { VideoTypes } from "@types";
import { useEffect, useState } from "react";
import { useRecorderStore } from "@/store/recorderStore";

export const ListCoders = ({
  videoTypes,
  codecs,
  name,
  defaultValue,
}: {
  videoTypes: VideoTypes[];
  codecs: string[];
  name: string;
  defaultValue: string;
}) => {
  const [supportedCodecs, setSupportedCodecs] = useState<string[]>([]);
  const { updateExtension } = useRecorderStore();
  useEffect(() => {
    videoTypes.forEach(({ type, extension }) => {
      const mimeType = `video/${type}`;
      codecs.forEach((codec) => {
        const isSupported = MediaRecorder.isTypeSupported(
          `${mimeType};codecs=${codec}`
        );
        if (isSupported)
          setSupportedCodecs((prev) => [
            ...prev,
            `${mimeType};codecs=${codec} (${extension})`,
          ]);
      });
    });
  }, [videoTypes, codecs]);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const regex = event.target.value.match(/\.[a-z]+/);
    const extension = regex ? regex[0] : ".ext";
    updateExtension(extension);
  };
  return (
    <div className="flex items-center relative max-w-fit leading-7">
      <FileIcon className="absolute left-1 text-gray-500 dark:text-neutral-800 size-6" />
      <select
        onChange={handleChange}
        name={name}
        defaultValue={defaultValue}
        className="max-w-fit h-9 leading-7 ps-8 border-2 border-gray-900/60 dark:border-black/70 rounded-xl bg-gray-50 dark:bg-neutral-600 text-black dark:text-white transition placeholder:text-black/60 dark:placeholder:text-white/40 focus:border-gray-900/60 focus:dark:border-gray-900 [outline:none]"
      >
        <option value="default" disabled>
          Selecciona un formato válido...
        </option>
        {supportedCodecs.map((codec, index) => {
          return (
            <option key={index} value={codec}>
              {codec}
            </option>
          );
        })}
      </select>
    </div>
  );
};
