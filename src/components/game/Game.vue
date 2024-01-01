<script setup lang="ts">
import { useCargoStore } from "../../store/cargo";
import { useGameStore } from "../../store/game";
import { useTarget } from "../../store/target";
import Cargo from "./Cargo.vue";
import Map from "./Map.vue";
import Player from "./Player.vue";
import Targer from "./Targer.vue";

const { game } = useGameStore();
const { cargos, addCargo, createCargo } = useCargoStore();
addCargo(createCargo({ x: 2, y: 2 }));
addCargo(createCargo({ x: 3, y: 3 }));

const { targets, addTarget, createTarget } = useTarget();
addTarget(createTarget({ x: 4, y: 3 }));
addTarget(createTarget({ x: 4, y: 2 }));
</script>

<template>
  <div>
    <Map />
    <template v-for="target in targets">
      <Targer :x="target.x" :y="target.y" />
    </template>
    <Player />
    <template v-for="cargo in cargos">
      <Cargo :cargo="cargo" />
    </template>
    <div v-if="game.isGameCompleted">下一关</div>
  </div>
</template>
