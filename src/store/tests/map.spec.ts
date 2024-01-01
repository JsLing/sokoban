import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useMapStore } from "../map";

describe("map", () => {
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
  it("should", () => {
    expect(true).toBe(true);
  });

  it("setupMap", () => {
    const { map, setupMap } = useMapStore();
    const newMap = [
      [1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2],
    ];

    setupMap(newMap);

    expect(map).toEqual(newMap);
  });
});
