import { mouseCMD, drawCMD, printScreenCMD } from "../constants/index.js";

export const parseMessage = (message: string) => {
  const [action, ...value] = message.split(" ");
  const [cmd, subCMD] = action.split("_");
  return {
    cmd,
    subCMD,
    value,
  };
};

export const validateData = (data: string) => {
  const [action, value] = data.split(" ");
  return (
    Object.values(mouseCMD).includes(action) ||
    Object.values(drawCMD).includes(action) ||
    Object.values(printScreenCMD).includes(action)
  );
};
