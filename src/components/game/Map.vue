<script setup lang="ts">
import floorImage from "@/assets/floor.png";
import wallImage from "@/assets/wall.png";
import { MapTile, useMapStore } from "@/store/map";
const { map } = useMapStore();
</script>

<template>
  <div>
    <div v-for="(row, i) in map" class="flex">
      <div v-for="(col, j) in map[i]">
        <template v-if="map[i][j] === MapTile.WALL">
          <img :src="wallImage" />
        </template>
        <template v-if="map[i][j] === MapTile.FLOOR">
          <img :src="floorImage" />
        </template>
      </div>
    </div>
  </div>
</template>
