import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { FormRecorder } from "@components/FormRecorder";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <FormRecorder />
      </main>
      <Footer />
    </>
  );
};
