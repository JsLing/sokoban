<script setup lang="ts">
import floorImage from "@/assets/floor.png";
import wallImage from "@/assets/wall.png";
import { useDrag } from "@/composables/useDrag";
import { useEditElementStore } from "@/store/edit/editElement";
import { useMapEditStore } from "@/store/edit/mapEdit";
import { MapTile } from "@/store/map";

interface Prop {
  x: number;
  y: number;
}

const prop = defineProps<Prop>();
const { map } = useMapEditStore();

const { isDragging, startDrag, stopDrag } = useDrag();
const { getCurrentEditElement } = useEditElementStore();

function handleClick() {
  getCurrentEditElement().execute(prop);
}

function handleMouseDown() {
  startDrag();
  window.addEventListener("mouseup", handleMouseUp);
}
function handleMouseLeave() {
  stopDrag();
  window.removeEventListener("mouseup", handleMouseUp);
}

function handleMouseUp() {
  if (isDragging()) {
    getCurrentEditElement()?.execute(prop);
  }
}
</script>
<template>
  <div
    class="border border-white"
    @click="handleClick"
    @mousedown="handleMouseDown"
    @mouseleave="handleMouseLeave"
  >
    <template v-if="map[prop.y][prop.x] === MapTile.WALL">
      <img :src="wallImage" draggable="false" />
    </template>
    <template v-if="map[prop.y][prop.x] === MapTile.FLOOR">
      <img :src="floorImage" draggable="false" />
    </template>
  </div>
</template>
