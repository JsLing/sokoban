import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { LevelGameData } from "../../game/gameData";
import { useCargoStore } from "../cargo";
import { useGameStore } from "../game";
import { useMapStore } from "../map";
import { usePlayerStore } from "../player";
import { useTarget } from "../target";

const fristLevelGameData = {
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

const secondLevelGameData = {
  player: {
    x: 2,
    y: 2,
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

const gameData = [fristLevelGameData, secondLevelGameData];

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
    const { setupGame } = useGameStore();

    setupGame(gameData);

    expectLevelGameData(fristLevelGameData);
  });

  it("next game", () => {
    const { game, setupGame, toNextLevel } = useGameStore();

    setupGame(gameData);

    toNextLevel();

    expect(game.level).toBe(2);
    expectLevelGameData(secondLevelGameData);
  });

  it("should be reset game completed when to next level", () => {
    const { game, setupGame, toNextLevel } = useGameStore();
    game.isGameCompleted = true;

    setupGame(gameData);

    toNextLevel();

    expect(game.isGameCompleted).toBe(false);
  });
});

function expectLevelGameData(levelGameData: LevelGameData) {
  const { map } = useMapStore();
  const { player } = usePlayerStore();
  const { cargos } = useCargoStore();
  const { targets } = useTarget();

  expect(map).toEqual(levelGameData.map);
  expect(player).toEqual(levelGameData.player);
  expect(targets.length).toBe(levelGameData.cargos.length);
  expect(cargos.length).toBe(levelGameData.cargos.length);
}
