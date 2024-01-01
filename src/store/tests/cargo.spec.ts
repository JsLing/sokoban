import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useCargoStore } from "../cargo";
import { useMapStore } from "../map";
import { useTarget } from "../target";

describe("cargo", () => {
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

  it("should add cargo", () => {
    const { addCargo, createCargo, cargos } = useCargoStore();

    addCargo(createCargo({ x: 2, y: 1 }));

    expect(cargos.length).toBe(1);
  });

  it("shift in ", () => {
    const { addCargo, createCargo, moveCargo } = useCargoStore();
    const cargo = createCargo({ x: 2, y: 1 });
    addCargo(cargo);

    const { addTarget, createTarget } = useTarget();
    addTarget(createTarget({ x: 3, y: 1 }));

    moveCargo(cargo, 1, 0);

    expect(cargo.onTarget).toBe(true);
  });

  it("shift out", () => {
    const { addCargo, createCargo, moveCargo } = useCargoStore();
    const cargo = createCargo({ x: 2, y: 1 });
    addCargo(cargo);

    const { addTarget, createTarget } = useTarget();
    addTarget(createTarget({ x: 3, y: 1 }));

    moveCargo(cargo, 1, 0);
    moveCargo(cargo, 1, 0);

    expect(cargo.onTarget).toBe(false);
  });
});
