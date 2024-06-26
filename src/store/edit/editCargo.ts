import { generateId } from "@/utils/id";
import { defineStore } from "pinia";
import { reactive } from "vue";

export interface EditCargo {
  x: number;
  y: number;
  id: number;
}
export const useEditCargoStore = defineStore("edit-cargo", () => {
  const cargos = reactive<EditCargo[]>([]);

  function createCargo({ x, y }: { x: number; y: number }): EditCargo {
    return {
      id: generateId(),
      x,
      y,
    };
  }
  function addCargo(cargo: EditCargo) {
    cargos.push(cargo);
  }

  function removeCargo(cargo: EditCargo) {
    cargos.splice(cargos.indexOf(cargo), 1);
  }

  return {
    cargos,
    removeCargo,
    createCargo,
    addCargo,
  };
});
