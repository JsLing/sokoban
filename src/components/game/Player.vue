<script setup lang="ts">
import keeperImg from "../../assets/keeper.png";
import { usePosition } from "../../composables/usePosition";
import { usePlayerStore } from "../../store/player";
import { useMove } from "./player";

useMove();

const { player } = usePlayerStore();
const { position } = usePosition(player);
</script>
<template>
  <div>
    <img class="absolute" :src="keeperImg" :style="position" />
  </div>
</template>
