export interface PawnDetails {
  id: number;
  win: boolean;
  position: number;
  positionBlock: "left" | "right" | "top" | "bottom" | null;
  color: "red" | "green" | "yellow" | "blue";
  unlocked: boolean;
}
