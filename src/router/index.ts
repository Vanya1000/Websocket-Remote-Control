import internal from "stream";
import { drawShape } from "../actions/drawShape.js";
import { mouseMove } from "../actions/mouseMove.js";
import { printScreen } from "../actions/printScreen.js";
import { parseMessage, validateData } from "../utils/index.js";

const router = async (data: string, stream: internal.Duplex) => {
  const { cmd, subCMD, value } = parseMessage(data);
  const isValid = validateData(data);
  if (!isValid) {
    stream.write("Invalid data!");
    console.log("Invalid data!");
    return;
  }
  console.log(cmd);
  switch (cmd) {
    case "mouse":
      const mouseMsg = await mouseMove(subCMD, value);
      console.log(`${"Result:"} ${mouseMsg}`);
      stream.write(mouseMsg);
      return;
    case "draw":
      const drawMsg = await drawShape(subCMD, value);
      console.log(`${"Result:"} ${drawMsg}`);
      stream.write(drawMsg);
      return;
    case "prnt":
      const printScreenMsg = await printScreen(subCMD);
      console.log(`${"Result:"} ${printScreenMsg}`);
      stream.write(printScreenMsg);
      return;
    default:
      console.log("Unknown action");
  }
};

export default router;
