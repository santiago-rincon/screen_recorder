import { StartMediaRecorderFn } from "@types";

export const startMediaRecorder = (
  params: StartMediaRecorderFn
) => {
  return new Promise<string>((resolve, reject) => {
    const { audio, mimeType } = params;
    navigator.mediaDevices
      .getDisplayMedia({
        video: { frameRate: { ideal: 30 } },
        audio: audio,
      })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream, {
          mimeType: mimeType,
        });
        mediaRecorder.start();
        const [video] = stream.getTracks();
        video.addEventListener("ended", () => {
          mediaRecorder.stop();
        });
        mediaRecorder.addEventListener("dataavailable", (e) => {
          resolve(URL.createObjectURL(e.data));
        });
      })
      .catch((error) => {
        if (error instanceof DOMException) {
          if (error.name === "NotAllowedError")
            reject("No se puede acceder a los dispositivos de grabación");
          if (error.name === "NotSupportedError")
            reject("Formato de video no soportado por el navegador");
        }
        reject("Ha ocurrido un error inesperado")
      });
  });
};
