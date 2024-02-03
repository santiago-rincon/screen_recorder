import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { FormRecorder } from "@components/FormRecorder";
import { VideoPlayer } from "./components/VideoPlayer";
import { useRecorderStore } from "./store/recorderStore";

export const App = () => {
  const { srcData } = useRecorderStore();
  return (
    <>
      <Header />
      <main className="max-w-5xl">
        {srcData.blob ? <VideoPlayer /> : <FormRecorder />}
      </main>
      <Footer />
    </>
  );
};
