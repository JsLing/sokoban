import { defineStore } from "pinia";
import { reactive } from "vue";
import { GameData } from "../game/gameData";
import { useCargoStore } from "./cargo";
import { useMapStore } from "./map";
import { usePlayerStore } from "./player";
import { useTarget } from "./target";

interface Game {
  isGameCompleted: boolean;
  level: number;
}

export const useGameStore = defineStore("game", () => {
  const game = reactive<Game>({
    isGameCompleted: false,
    level: 1,
  });

  let _gameData: GameData;

  function detectionGameCompletd() {
    const { cargos } = useCargoStore();

    game.isGameCompleted = cargos.every((c) => c.onTarget);
  }

  function setupGame(gameData: GameData) {
    _gameData = gameData;

    setupLevel();
  }

  function toNextLevel() {
    game.level += 1;
    game.isGameCompleted = false;
    setupLevel();
  }

  function setupLevel() {
    const { player } = usePlayerStore();
    const { setupMap } = useMapStore();
    const { addCargo, createCargo, cleanAllCargo } = useCargoStore();
    const { addTarget, createTarget, cleanAllTarget } = useTarget();

    const levelGamedata = _gameData[game.level - 1];

    setupMap(levelGamedata.map);
    player.x = levelGamedata.player.x;
    player.y = levelGamedata.player.y;

    cleanAllCargo();
    levelGamedata.cargos.forEach((c) => {
      addCargo(createCargo({ x: c.x, y: c.y }));
    });

    cleanAllTarget();
    levelGamedata.targets.forEach((t) => {
      addTarget(createTarget({ x: t.x, y: t.y }));
    });
  }

  return {
    game,
    toNextLevel,
    detectionGameCompletd,
    setupGame,
  };
});
