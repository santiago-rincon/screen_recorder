import { FileIcon } from "@/icons/File";

export const Input = ({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) => {
  return (
    <div className="flex items-center relative max-w-52 leading-7">
      <FileIcon className="absolute left-1 text-gray-500 dark:text-neutral-800 size-6" />
      <input
        className="w-full h-9 leading-7 ps-8 border-2 border-gray-900/60 dark:border-black/70 rounded-xl bg-gray-50 dark:bg-neutral-600 text-black dark:text-white transition placeholder:text-black/60 dark:placeholder:text-white/80 focus:border-gray-900/60 focus:dark:border-gray-900 [outline:none]"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
