export interface VideoTypes {
  type: string;
  extension: string;
}

type BlobData = {
  blob: string;
  fileName: string;
};

export interface State {
  fileExtension: string | null;
  srcData: BlobData;
  updateExtension: (extension: string) => void;
  updatesrcData: (data: BlobData) => void;
}

export interface StartMediaRecorderFn {
  audio: boolean;
  mimeType: string;
}

export interface Message {
  message: string;
  class: string;
}
