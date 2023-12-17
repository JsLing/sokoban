import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useMapStore } from "../../../store/map";
import { usePlayerStore } from "../../../store/player";
import { useMove } from "../player";

beforeEach(() => {
  setActivePinia(createPinia());
});

describe("player", () => {
  it("should move to left when press ArrowLeft", () => {
    const { player } = usePlayerStore();
    const { setupMap } = useMapStore();

    setupMap([
      [1, 1, 1, 1, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 1, 1, 1, 1],
    ]);

    player.x = 1;
    player.y = 1;

    useMove();

    window.dispatchEvent(new KeyboardEvent("keyup", { code: "ArrowLeft" }));

    expect(player.x).toBe(1);
  });
});
