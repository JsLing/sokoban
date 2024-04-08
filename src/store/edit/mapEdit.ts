import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { MapTile } from "../map";

type MapEdit = MapTile[][];

export const useMapEditStore = defineStore("map-edit", () => {
  const map = reactive<MapEdit>([]);
  const row = ref(8);
  const col = ref(8);

  function initMap(_row?: number, _col?: number) {
    if (_row) row.value = _row;
    if (_col) col.value = _col;
    for (let i = 0; i < row.value; i++) {
      const cells = [];
      for (let j = 0; j < col.value; j++) {
        cells.push(MapTile.FLOOR);
      }
      map.push(cells);
    }
  }

  function setRow(_row: number) {
    row.value = _row;
  }

  function setCol(_col: number) {
    col.value = _col;
  }

  function updateMapRow() {
    const oldRow = map.length;
    const col = map[0].length;

    if (row.value > oldRow) {
      const diff = row.value - oldRow;

      for (let i = 0; i < diff; i++) {
        map.push(new Array(col).fill(MapTile.FLOOR));
      }
    } else if (row.value < oldRow) {
      const diff = oldRow - row.value;

      map.splice(map.length - diff, map.length);
    }
  }

  function updateMapCol() {
    const oldCol = map[0].length;

    if (col.value > oldCol) {
      const diff = col.value - oldCol;

      map.forEach((cells) => {
        cells.push(...new Array(diff).fill(MapTile.FLOOR));
      });
    } else if (oldCol > col.value) {
      const diff = oldCol - col.value;

      map.forEach((cells) => {
        cells.splice(cells.length - diff, cells.length);
      });
    }
  }

  return {
    map,
    initMap,
    row,
    col,
    setRow,
    updateMapRow,
    setCol,
    updateMapCol,
  };
});
