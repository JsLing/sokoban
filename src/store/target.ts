import { defineStore } from "pinia";
import { reactive } from "vue";
import { Position } from "../composables/usePosition";

interface Target {
  x: number;
  y: number;
}

export const useTarget = defineStore("target", () => {
  const targets = reactive<Target[]>([]);

  function createTarget({ x, y }: { x: number; y: number }) {
    return { x, y };
  }

  function addTarget(target: Target) {
    targets.push(target);
  }

  function findTarget(position: Position) {
    return targets.find((t) => t.x === position.x && t.y === position.y);
  }

  return {
    targets,
    createTarget,
    addTarget,
    findTarget,
  };
});
