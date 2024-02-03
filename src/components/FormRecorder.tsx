import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ListCoders } from "./ListCodecs";
import { startMediaRecorder } from "@/utils/mediaRecorder";
import { ToggleAudio } from "@components/ToggleAudio";
import { useRecorderStore } from "@store/recorderStore";
import { Message, VideoTypes } from "@types";
import React, { useRef, useState } from "react";
const videoTypes: VideoTypes[] = [
  { type: "3gpp", extension: ".3gp" },
  { type: "mp4", extension: ".mp4" },
  { type: "ogg", extension: ".ogg" },
  { type: "quicktime", extension: ".mov" },
  { type: "webm", extension: ".webm" },
  { type: "x-matroska", extension: ".mkv" },
];
const codecs = [
  "vp9",
  "vp9.0",
  "vp8",
  "vp8.0",
  "avc1",
  "av1",
  "h265",
  "h.265",
  "h264",
  "h.264",
  "opus",
  "pcm",
  "aac",
  "mpeg",
  "mp4a",
  "theora",
  "cinepack",
];

export const FormRecorder = () => {
  const { fileExtension, updatesrcData } = useRecorderStore();
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<Message | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsRecording(true);
    setMessage(null);
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData.entries());
    const { checkAudio } = values;
    let { fileName, videoType } = values;
    if (!videoType) {
      setMessage({
        message: "Elige un formato de video válido",
        class: "text-red-600",
      });
      setIsRecording(false);
      return;
    }
    videoType = videoType.toString().split(" ")[0];
    const extension = fileExtension;
    if (fileName) {
      fileName = `${fileName.toString().split(".")[0]}${fileExtension}`;
    } else {
      fileName = `captura${extension}`;
    }
    const audio = checkAudio ? true : false;
    try {
      setMessage({message:"Grabando...", class:"text-yellow-700 animate-pulse"})
      const blob = await startMediaRecorder({
        audio,
        mimeType: videoType,
      });
      setIsRecording(false);
      updatesrcData({ blob, fileName });
    } catch (error) {
      if (typeof error === "string")
        setMessage({ message: error, class: "text-red-600" });
      setIsRecording(false);
    }
  };
  return (
    <div className="flex flex-col items-center gap-y-24 my-7 justify-between">
      <h2 className="text-3xl font-bold text-black/80 dark:text-white/80">
        Configura tu video!!
      </h2>
      <form
        className="flex flex-col items-center gap-y-7"
        onSubmit={handleSubmit}
        ref={formRef}
        onChange={() => setMessage(null)}
      >
        <div className="flex place-content-center gap-x-6">
          <ListCoders
            videoTypes={videoTypes}
            codecs={codecs}
            name="videoType"
            defaultValue="default"
          />
          <Input
            placeholder={`captura${fileExtension ?? ".ext"}`}
            name="fileName"
          />
          <ToggleAudio name="checkAudio" />
        </div>
        <Button disabled={isRecording}>Iniciar grabación</Button>
      </form>
      <span className={`font-semibold ${message?.class}`}>{message?.message}</span>
    </div>
  );
};
