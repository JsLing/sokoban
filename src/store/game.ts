import { defineStore } from "pinia";
import { reactive } from "vue";
import { LevelGameData } from "../game/gameData";
import { useCargoStore } from "./cargo";
import { useMapStore } from "./map";
import { usePlayerStore } from "./player";
import { useTarget } from "./target";

interface Game {
  isGameCompleted: boolean;
}

export const useGameStore = defineStore("game", () => {
  const game = reactive<Game>({
    isGameCompleted: false,
  });

  function detectionGameCompletd() {
    const { cargos } = useCargoStore();

    game.isGameCompleted = cargos.every((c) => c.onTarget);
  }

  function setupGame(levelGamedata: LevelGameData) {
    const { player } = usePlayerStore();
    const { setupMap } = useMapStore();
    const { addCargo, createCargo } = useCargoStore();
    const { addTarget, createTarget } = useTarget();

    setupMap(levelGamedata.map);
    player.x = levelGamedata.player.x;
    player.y = levelGamedata.player.y;

    levelGamedata.cargos.forEach((c) => {
      addCargo(createCargo({ x: c.x, y: c.y }));
    });

    levelGamedata.targets.forEach((t) => {
      addTarget(createTarget({ x: t.x, y: t.y }));
    });
  }

  return {
    game,
    detectionGameCompletd,
    setupGame,
  };
});
