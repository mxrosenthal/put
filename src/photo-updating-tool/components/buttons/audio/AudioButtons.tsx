import { AudioFiles } from "../../../../constants";

export const SixtyNinePutsButton = () => {
  const audio = new Audio(AudioFiles.sixtyNine);

  return <button onClick={() => audio.play()}>69 Puts</button>;
};

export const HundredPutsButton = () => {
  const audio = new Audio(AudioFiles.hundred);

  return <button onClick={() => audio.play()}>100 Puts</button>;
};

export const ThousandPutsButton = () => {
  const audio = new Audio(AudioFiles.thousand);

  return <button onClick={() => audio.play()}>1000 Puts</button>;
};

export const NicePutButton = () => {
  const audio = new Audio(AudioFiles.nicePut);

  return <button onClick={() => audio.play()}>Nice Put</button>;
};

export const PutMasterButton = () => {
  const audio = new Audio(AudioFiles.putMaster);

  return <button onClick={() => audio.play()}>Put Master</button>;
};

export const ReallyGreatPutButton = () => {
  const audio = new Audio(AudioFiles.reallyGreatPut);

  return <button onClick={() => audio.play()}>Really Great Put</button>;
};

export const SomebodyPutButton = () => {
  const audio = new Audio(AudioFiles.somebodyPut);

  return <button onClick={() => audio.play()}>Somebody Put</button>;
};

export const LotOfPuttingButton = () => {
  const audio = new Audio(AudioFiles.lotOfPutting);

  return <button onClick={() => audio.play()}>That's a lot of putting</button>;
};

export const AudioButtons = () => {
  return (
    <div>
      <SixtyNinePutsButton />
      <HundredPutsButton />
      <ThousandPutsButton />
      <NicePutButton />
      <PutMasterButton />
      <ReallyGreatPutButton />
      <SomebodyPutButton />
      <LotOfPuttingButton />
    </div>
  );
};
