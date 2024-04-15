import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useEditCargoStore } from "../editCargo";

describe("editCargo", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should remove a cargo", () => {
    const { cargos, addCargo, createCargo, removeCargo } = useEditCargoStore();

    const cargo = createCargo({ x: 1, y: 1 });
    addCargo(cargo);

    removeCargo(cargo);
    expect(cargos.length).toBe(0);
  });
});
