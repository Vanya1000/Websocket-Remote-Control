import {
  mouse,
  up,
  down,
  left,
  right,
  Button,
  straightTo,
} from "@nut-tree/nut-js";

export const drawShape = async (subCMD: string, value: string[]) => {
  const [w, h] = value;
  mouse.config = {
    mouseSpeed: 300,
    autoDelayMs: 0,
  };
  switch (subCMD) {
    case "circle":
      mouse.config.mouseSpeed = 500;
      const radius = Number(w);
      const mouseX = (await mouse.getPosition()).x;
      const mouseY = (await mouse.getPosition()).y;
      await mouse.pressButton(Button.LEFT);
      for (let i = 0; i <= Math.PI * 2; i += 0.03) {
        const x = mouseX + radius + radius * Math.cos(Math.PI + i);
        const y = mouseY + radius * Math.sin(Math.PI + i);
        await mouse.move(straightTo({ x: Math.round(x), y: Math.round(y) }));
      }
      await mouse.releaseButton(Button.LEFT);
      return `draw_circle_${w}px`;
    case "rectangle":
      await mouse.pressButton(Button.LEFT);
      await mouse.move(right(Number(w)));
      await mouse.move(down(Number(h)));
      await mouse.move(left(Number(w)));
      await mouse.move(up(Number(h)));
      await mouse.releaseButton(Button.LEFT);
      return `draw_rectangle_${w}px,${h}px`;
    case "square":
      await mouse.pressButton(Button.LEFT);
      await mouse.move(right(Number(w)));
      await mouse.move(down(Number(w)));
      await mouse.move(left(Number(w)));
      await mouse.move(up(Number(w)));
      await mouse.releaseButton(Button.LEFT);
      return `draw_square_${w}px,${w}px`;
    default:
      return "Unknown action";
  }
};
