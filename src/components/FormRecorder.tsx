import { ToggleAudio } from "@components/ToggleAudio";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useState } from "react";

export const FormRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  return (
    <form className="flex flex-col gap-y-7 items-center">
      <div className="flex place-content-center gap-x-6">
        <Input placeholder="Nombre del archivo" />
        <ToggleAudio />
      </div>
      <Button>{isRecording ? "Detener grabación" : "Iniciar grabación"}</Button>
    </form>
  );
};
