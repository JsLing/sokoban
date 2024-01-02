<script setup lang="ts">
import { gameData } from "../../game/gameData";
import { useCargoStore } from "../../store/cargo";
import { useGameStore } from "../../store/game";
import { useTarget } from "../../store/target";
import Cargo from "./Cargo.vue";
import Map from "./Map.vue";
import Player from "./Player.vue";
import Targer from "./Targer.vue";

const { game, setupGame, toNextLevel } = useGameStore();
const { cargos } = useCargoStore();
const { targets } = useTarget();

setupGame(gameData);

function handleNextLevel() {
  toNextLevel();
}
</script>

<template>
  <div>
    <Map />
    <template v-for="target in targets">
      <Targer :x="target.x" :y="target.y" />
    </template>
    <Player />
    <template v-for="cargo in cargos" :key="cargo.id">
      <Cargo :cargo="cargo" />
    </template>
    <div v-if="game.isGameCompleted" @click="handleNextLevel">下一关</div>
  </div>
</template>
