import cargoImage from "@/assets/cargo.png";
import floorImage from "@/assets/floor.png";
import keeperImage from "@/assets/keeper.png";
import wallImage from "@/assets/wall.png";
import { Position } from "@/composables/usePosition";
import { defineStore } from "pinia";
import { ref } from "vue";
import { MapTile } from "../map";
import { useEditCargoStore } from "./editCargo";
import { useEditPlayerStore } from "./editPlayer";
import { useMapEditStore } from "./mapEdit";

export interface EditElement {
  name: string;
  img: string;
  execute: (position: Position) => void;
}

export const wallEditElement: EditElement = {
  name: "墙",
  img: wallImage,
  execute(position) {
    const { map } = useMapEditStore();
    map[position.y][position.x] = MapTile.WALL;
  },
};

export const floorEditElement: EditElement = {
  name: "地板",
  img: floorImage,
  execute(position) {
    const { map } = useMapEditStore();
    map[position.y][position.x] = MapTile.FLOOR;
  },
};

export const playerEditElement: EditElement = {
  name: "玩家",
  img: keeperImage,
  execute(position) {
    const { player } = useEditPlayerStore();
    player.x = position.x;
    player.y = position.y;
  },
};

export const cargoEditElement: EditElement = {
  name: "箱子",
  img: cargoImage,
  execute(position) {
    const { createCargo, addCargo } = useEditCargoStore();
    addCargo(createCargo({ x: position.x, y: position.y }));
  },
};

export const useEditElementStore = defineStore("edit-element", () => {
  let currentEditElement = ref<EditElement>();

  function getCurrentEditElement() {
    return currentEditElement.value;
  }

  function setCurrentEditElement(editElement: EditElement) {
    currentEditElement.value = editElement;
  }

  return {
    getCurrentEditElement,
    setCurrentEditElement,
  };
});
