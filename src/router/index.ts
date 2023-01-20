import internal from "stream";
import { drawShape } from "../actions/drawShape.js";
import { mouseMove } from "../actions/mouseMove.js";
import { parseMessage, validateData } from "../utils/index.js";

const router = async (data: string, stream: internal.Duplex) => {
  const { cmd, subCMD, value } = parseMessage(data);
  const isValid = validateData(data);
  if (!isValid) {
    stream.write("Invalid data!");
    console.log("Invalid data!");
    return;
  }
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
    default:
      console.log("Unknown action");
  }
};

export default router;
