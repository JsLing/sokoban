import { defineStore } from "pinia";
import { Position } from "../composables/usePosition";

export const useCargoStore = defineStore("cargo", () => {
  const cargos: Position[] = [
    {
      x: 2,
      y: 2,
    },
    {
      x: 3,
      y: 3,
    },
  ];

  return {
    cargos,
  };
});
