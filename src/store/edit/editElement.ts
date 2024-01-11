import floorImage from "@/assets/floor.png";
import wallImage from "@/assets/wall.png";
import { Position } from "@/composables/usePosition";
import { defineStore } from "pinia";
import { MapTile } from "../map";
import { useMapEditStore } from "./mapEdit";

export interface EditElement {
  img: string;
  execute: (position: Position) => void;
}

export const wallEditElement: EditElement = {
  img: wallImage,
  execute(position) {
    const { map } = useMapEditStore();
    map[position.y][position.x] = MapTile.WALL;
  },
};

export const floorEditElement: EditElement = {
  img: floorImage,
  execute(position) {
    const { map } = useMapEditStore();
    map[position.y][position.x] = MapTile.FLOOR;
  },
};

export const useEditElementStore = defineStore("edit-element", () => {
  let currentEditElement: EditElement;

  function getCurrentEditElement() {
    return currentEditElement;
  }

  function setCurrentEditElement(editElement: EditElement) {
    currentEditElement = editElement;
  }

  return {
    getCurrentEditElement,
    setCurrentEditElement,
  };
});
