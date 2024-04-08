<script setup lang="ts">
import { useEditPlayerStore } from "@/store/edit/editPlayer";
import keeperImg from "../../assets/keeper.png";
import { STEP_EDIT, usePosition } from "../../composables/usePosition";

const { player } = useEditPlayerStore();

const { position } = usePosition(player, STEP_EDIT);
</script>
<template>
  <div class="absolute border-blue-500" :style="position">
    <img :src="keeperImg" />
  </div>
</template>
