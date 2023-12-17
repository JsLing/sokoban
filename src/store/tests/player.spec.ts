import { beforeEach, describe, expect, it } from "vitest";

import { createPinia, setActivePinia } from "pinia";
import { useMapStore } from "../map";
import { usePlayerStore } from "../player";

describe("player", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("normal move", () => {
    beforeEach(() => {
      const { setupMap } = useMapStore();

      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ]);
    });

    it("should move to left", () => {
      const { player, movePlayerToLeft } = usePlayerStore();

      player.x = 1;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(0);
    });
    it("should move to right", () => {
      const { player, movePlayerToRight } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToRight();

      expect(player.x).toBe(2);
    });
    it("should move to top", () => {
      const { player, movePlayerToTop } = usePlayerStore();

      player.x = 1;
      player.y = 1;
      movePlayerToTop();
      expect(player.y).toBe(0);
    });
    it("should move to down", () => {
      const { player, movePlayerToDown } = usePlayerStore();

      player.x = 1;
      player.y = 1;
      movePlayerToDown();
      expect(player.y).toBe(2);
    });
  });

  describe("collision wall", () => {
    beforeEach(() => {
      const map = [
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ];

      const { setupMap } = useMapStore();

      setupMap(map);
    });
    it("should not move to left when collision a wall ", () => {
      const { movePlayerToLeft, player } = usePlayerStore();

      player.x = 1;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(1);
    });
    it("should not move to right when collision a wall ", () => {
      const { movePlayerToRight, player } = usePlayerStore();

      player.x = 3;
      player.y = 1;

      movePlayerToRight();

      expect(player.x).toBe(1);
    });

    it("should not move to top when collision a wall ", () => {
      const { movePlayerToTop, player } = usePlayerStore();

      player.x = 1;
      player.y = 1;

      movePlayerToTop();

      expect(player.x).toBe(1);
    });
    it("should not move to down when collision a wall ", () => {
      const { movePlayerToDown, player } = usePlayerStore();

      player.x = 1;
      player.y = 3;

      movePlayerToDown();

      expect(player.x).toBe(3);
    });
  });
});
