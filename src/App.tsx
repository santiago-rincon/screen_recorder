import { Footer } from "@components/Footer";
import { FormRecorder } from "@components/FormRecorder";
import { Header } from "@components/Header";
import { useRecorderStore } from "@store/recorderStore";
import { useState, useEffect } from "react";
import { VideoPlayer } from "@components/VideoPlayer";
import { BannerMobile } from "@components/BannerMobile";

export const App = () => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  useEffect(() => {
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
      ? setIsDesktop(false)
      : setIsDesktop(true);
  }, []);
  const { srcData } = useRecorderStore();
  return (
    <>
      <Header />
      {isDesktop ? (
        <main className="max-w-5xl">
          {srcData.blob ? <VideoPlayer /> : <FormRecorder />}
        </main>
      ) : (
        <BannerMobile />
      )}

      <Footer />
    </>
  );
};
