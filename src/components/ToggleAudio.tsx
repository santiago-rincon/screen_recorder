import { Speaker } from "@/icons/Speaker";
import { SpeakerMute } from "@/icons/SpeakerMute";

export const ToggleAudio = ({
  name,
}: {
  name: string;
}) => {
  return (
    <label className="relative items-center cursor-pointer inline-flex">
      <input
        className="sr-only peer"
        type="checkbox"
        name={name}
      />
      <div className="group relative peer ring-0 bg-gray-50 dark:bg-neutral-600 border-2 border-gray-900/60 dark:border-black/70 rounded-full outline-none duration-700 after:duration-200 w-[4.5rem] h-9 shadow-md peer-checked:bg-gradient-to-r  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-500 dark:after:bg-neutral-800 after:outline-none after:size-[1.85rem] after:top-[0.1rem] after:left-1 peer-checked:after:translate-x-8">
        <Speaker className="absolute top-2 left-2 text-green-600 dark:text-green-500 size-5" />
        <SpeakerMute className="absolute top-2 left-11 text-red-600 size-[1.2rem]" />
      </div>
    </label>
  );
};
