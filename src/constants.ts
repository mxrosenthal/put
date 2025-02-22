export const Sizes = {
  micro: { width: 32, height: 16, fontSize: 8 },
  tiny: { width: 64, height: 32, fontSize: 16 },
  small: { width: 96, height: 48, fontSize: 24 },
  medium: { width: 128, height: 64, fontSize: 32 },
  large: { width: 160, height: 80, fontSize: 48 },
  venti: { width: 320, height: 160, fontSize: 128 },
  yuge: { width: 640, height: 320, fontSize: 256 },
};

export type Size =
  | "micro"
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "venti"
  | "yuge";

export enum Color {
  White = "white",
  Black = "black",
  Red = "red",
  Green = "green",
  Blue = "blue",
  Yellow = "yellow",
  Purple = "purple",
  Orange = "orange",
  Pink = "pink",
  Brown = "brown",
}

export enum AudioFiles {
  sixtyNine = "src/audio/69 puts.mp3",
  hundred = "src/audio/100 puts.mp3",
  thousand = "src/audio/1000 puts.mp3",
  nicePut = "src/audio/Nice put 2.mp3",
  putMaster = "src/audio/Put master 1.mp3",
  reallyGreatPut = "src/audio/Really great put 2.mp3",
  somebodyPut = "src/audio/Somebody put 1.mp3",
  lotOfPutting = "src/audio/Theres a lot of putting going on.mp3",
}
