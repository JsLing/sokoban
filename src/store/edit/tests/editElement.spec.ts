import { MapTile } from "@/store/map";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import {
  floorEditElement,
  useEditElementStore,
  wallEditElement,
} from "../editElement";
import { useMapEditStore } from "../mapEdit";

describe("editElement", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    const { initMap } = useMapEditStore();
    initMap();
  });

  it("should change to wall when current selected element is wall", () => {
    const { map } = useMapEditStore();
    const { getCurrentEditElement, setCurrentEditElement } =
      useEditElementStore();

    setCurrentEditElement(wallEditElement);

    getCurrentEditElement().execute({ x: 1, y: 1 });
    expect(map[1][1]).toBe(MapTile.WALL);
  });

  it("should change to floor when current selected element is floor", () => {
    const { map } = useMapEditStore();
    const { getCurrentEditElement, setCurrentEditElement } =
      useEditElementStore();

    setCurrentEditElement(floorEditElement);

    getCurrentEditElement().execute({ x: 1, y: 1 });
    expect(map[1][1]).toBe(MapTile.FLOOR);
  });
});
