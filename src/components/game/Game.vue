<script setup lang="ts">
import { levelGameData } from "../../game/gameData";
import { useCargoStore } from "../../store/cargo";
import { useGameStore } from "../../store/game";
import { useTarget } from "../../store/target";
import Cargo from "./Cargo.vue";
import Map from "./Map.vue";
import Player from "./Player.vue";
import Targer from "./Targer.vue";

const { game, setupGame } = useGameStore();
const { cargos } = useCargoStore();
const { targets } = useTarget();

setupGame(levelGameData);
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
