import { screen, Region, mouse } from "@nut-tree/nut-js";
import Jimp from "jimp";

export const printScreen = async (subCMD: string) => {
  if (subCMD === "scrn") {
    try {
      const { x, y } = await mouse.getPosition();
      const region = new Region(x, y, 200, 200);
      // await screen.highlight(region);
      const nutImage = await screen.grabRegion(region);
      const { data, width, height } = await nutImage.toRGB();
      // console.log(nutImage);
      const jimpImage = new Jimp({
        data,
        width,
        height,
      });

      // console.log(jimpImage);
      const imgBase64 = await jimpImage.getBase64Async(Jimp.MIME_PNG);
      // console.log(imgBase64);
      return `${"prnt_scrn"} ${imgBase64.split(",").at(-1)}`;
    } catch (error) {
      return "The_screenshot_goes_beyond_the_boundaries_of_the_main_monitor";
    }
  }
};
// refactor this code