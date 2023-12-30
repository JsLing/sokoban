import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useCargoStore } from "../cargo";

describe("cargo", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should add cargo", () => {
    const { addCargo, createCargo, cargos } = useCargoStore();

    addCargo(createCargo({ x: 2, y: 1 }));

    expect(cargos.length).toBe(1);
  });
});
