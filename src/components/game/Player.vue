<script setup lang="ts">
import keeperImg from "../../assets/keeper.png";
import { useMove, usePosition } from "./player";

const { position } = usePosition();
useMove();
</script>
<template>
  <div>
    <img class="absolute" :src="keeperImg" :style="position" />
  </div>
</template>
./game/player
