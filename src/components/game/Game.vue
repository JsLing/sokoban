<script setup lang="ts">
import { useCargoStore } from "../../store/cargo";
import Cargo from "./Cargo.vue";
import Map from "./Map.vue";
import Player from "./Player.vue";

const { cargos, addCargo, createCargo } = useCargoStore();
addCargo(createCargo({ x: 2, y: 2 }));
addCargo(createCargo({ x: 3, y: 3 }));
</script>

<template>
  <div>
    <Map />
    <Player />
    <template v-for="cargo in cargos">
      <Cargo :x="cargo.x" :y="cargo.y" />
    </template>
  </div>
</template>
