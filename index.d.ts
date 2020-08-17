declare module RNVideoInfo {
  interface VideoInfo {
    path: string;
    width: number;
    height: number;
    duration: number;
  }

  function get(filepath: string): Promise<VideoInfo>;
}

export default RNVideoInfo;
