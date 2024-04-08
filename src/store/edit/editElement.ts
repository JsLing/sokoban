import floorImage from "@/assets/floor.png";
import keeperImage from "@/assets/keeper.png";
import wallImage from "@/assets/wall.png";
import { Position } from "@/composables/usePosition";
import { defineStore } from "pinia";
import { MapTile } from "../map";
import { useEditPlayerStore } from "./editPlayer";
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

export const playerEditElement: EditElement = {
  img: keeperImage,
  execute(position) {
    const { player } = useEditPlayerStore();
    player.x = position.x;
    player.y = position.y;
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
