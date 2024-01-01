import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useCargoStore } from "../cargo";
import { useGameStore } from "../game";
import { useMapStore } from "../map";
import { usePlayerStore } from "../player";
import { useTarget } from "../target";

describe("game", () => {
  beforeEach(() => {
    setActivePinia(createPinia());

    const { setupMap } = useMapStore();
    setupMap([
      [1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ]);
  });
  it("should game completed", () => {
    const { addCargo, createCargo, moveCargo } = useCargoStore();
    const cargo = createCargo({ x: 2, y: 1 });
    addCargo(cargo);

    const { addTarget, createTarget } = useTarget();
    addTarget(createTarget({ x: 3, y: 1 }));

    moveCargo(cargo, 1, 0);

    const { detectionGameCompletd, game } = useGameStore();

    detectionGameCompletd();

    expect(game.isGameCompleted).toBe(true);
  });

  it("should not game completed", () => {
    const { addCargo, createCargo, moveCargo } = useCargoStore();
    const cargo = createCargo({ x: 2, y: 1 });
    addCargo(cargo);

    const { addTarget, createTarget } = useTarget();
    addTarget(createTarget({ x: 3, y: 1 }));

    moveCargo(cargo, 1, 0);
    moveCargo(cargo, 1, 0);

    const { detectionGameCompletd, game } = useGameStore();

    detectionGameCompletd();

    expect(game.isGameCompleted).toBe(false);
  });

  it("setupGame", () => {
    const levelGameData = {
      player: {
        x: 1,
        y: 1,
      },

      map: [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1],
      ],
      cargos: [
        {
          x: 2,
          y: 2,
        },
        {
          x: 3,
          y: 3,
        },
      ],
      targets: [
        {
          x: 4,
          y: 3,
        },
        {
          x: 4,
          y: 2,
        },
      ],
    };

    const { setupGame } = useGameStore();
    setupGame(levelGameData);

    const { map } = useMapStore();
    const { player } = usePlayerStore();
    const { cargos } = useCargoStore();
    const { targets } = useTarget();

    expect(map).toEqual(levelGameData.map);
    expect(player).toEqual(levelGameData.player);
    expect(targets.length).toBe(levelGameData.cargos.length);
    expect(cargos.length).toBe(levelGameData.cargos.length);
  });
});
