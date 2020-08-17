interface VideoInfo {
  path: string;
  width: number;
  height: number;
  duration: number;
}

declare class RNVideoInfo {
  get: (filepath: string) => Promise<VideoInfo>;
}

export default RNVideoInfo;
