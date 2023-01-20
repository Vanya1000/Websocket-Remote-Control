import { mouse, up, down, left, right } from "@nut-tree/nut-js";

export const mouseMove = async (subCMD: string, value: string[]) => {
  const mouseVal = value[0];
  const withoutValue = `mouse_${subCMD}_${value}`;
  switch (subCMD) {
    case "up":
      await mouse.move(up(Number(value)));
      return withoutValue;
    case "down":
      await mouse.move(down(Number(value)));
      return withoutValue;
    case "right":
      await mouse.move(right(Number(value)));
      return withoutValue;
    case "left":
      await mouse.move(left(Number(value)));
      return withoutValue;
    case "position":
      const position = await mouse.getPosition();
      return `mouse_position ${position.x}px,${position.y}px`;
    default:
      return "Unknown action";
  }
};
