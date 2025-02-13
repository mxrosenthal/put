import { AudioFiles } from "../constants";

export function useAudio(numPuts: number): string {
  const isTenthPut = numPuts % 10 === 0;
  const isHundredthPut = numPuts % 100 === 0;
  const isThousandthPut = numPuts % 1000 === 0;
  const isSixtyNinthPut = numPuts === 69;
  const isTwentyThirdPut = numPuts % 23 === 0;

  if (isSixtyNinthPut) return AudioFiles.sixtyNine;

  if (isThousandthPut) return AudioFiles.thousand;
  else if (isHundredthPut) return AudioFiles.hundred;
  else if (isTenthPut) return AudioFiles.nicePut;

  if (isTwentyThirdPut) {
    const randomPuts = [
      AudioFiles.putMaster,
      AudioFiles.reallyGreatPut,
      AudioFiles.somebodyPut,
      AudioFiles.lotOfPutting,
    ];
    return randomPuts[Math.floor(Math.random() * randomPuts.length)];
  }

  return "";
}
