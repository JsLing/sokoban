import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useMapEditStore } from "../mapEdit";

describe("mapEdit", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("shouid init map", () => {
    const row = 8;
    const col = 8;
    const { initMap, map } = useMapEditStore();
    initMap();

    expect(map.length).toBe(row);
    expect(map[0].length).toBe(col);
  });

  describe("row", () => {
    it("shouid add a new line when increase", () => {
      const { map, initMap, setRow, updateMapRow } = useMapEditStore();
      initMap(2, 2);
      setRow(4);

      updateMapRow();

      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
        ]
      `);
    });

    it("shouid remove a new line when decrease", () => {
      const { map, initMap, setRow, updateMapRow } = useMapEditStore();

      initMap(3, 3);

      setRow(2);

      updateMapRow();

      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
            2,
          ],
          [
            2,
            2,
            2,
          ],
        ]
      `);
    });
  });

  describe("col", () => {
    it("shouid add a new line when increase", () => {
      const { map, initMap, setCol, updateMapCol } = useMapEditStore();

      initMap(2, 2);

      setCol(4);

      updateMapCol();

      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
            2,
            2,
          ],
          [
            2,
            2,
            2,
            2,
          ],
        ]
      `);
    });
  });
  it("shouid remove a new line when decrease", () => {
    const { map, initMap, setCol, updateMapCol } = useMapEditStore();

    initMap(3, 3);

    setCol(2);

    updateMapCol();

    expect(map).toMatchInlineSnapshot(`
      [
        [
          2,
          2,
        ],
        [
          2,
          2,
        ],
        [
          2,
          2,
        ],
      ]
    `);
  });
});
