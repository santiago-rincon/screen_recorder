import { create } from "zustand";
import { State } from "@types";
export const useRecorderStore = create<State>((set) => {
  return {
    fileExtension: null,
    srcData: {
      blob: "",
      fileName: "",
    },
    updateExtension: (extension) => set({ fileExtension: extension }),
    updatesrcData: (data) => set({ srcData: data }),
  };
});
