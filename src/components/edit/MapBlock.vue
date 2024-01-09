<script setup lang="ts">
import floorImage from "@/assets/floor.png";
import wallImage from "@/assets/wall.png";
import { useMapEditStore } from "@/store/edit/mapEdit";
import { MapTile } from "@/store/map";

interface Prop {
  x: number;
  y: number;
}

const prop = defineProps<Prop>();
const { map } = useMapEditStore();

function handleClick() {
  map[prop.y][prop.x] = MapTile.WALL;
}
</script>
<template>
  <div class="border border-white" @click="handleClick">
    <template v-if="map[prop.y][prop.x] === MapTile.WALL">
      <img :src="wallImage" />
    </template>
    <template v-if="map[prop.y][prop.x] === MapTile.FLOOR">
      <img :src="floorImage" />
    </template>
  </div>
</template>
