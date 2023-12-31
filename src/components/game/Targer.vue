<script setup lang="ts">
import targetImage from "../../assets/target.png";
import { usePosition } from "../../composables/usePosition";

interface Props {
  x: number;
  y: number;
}

const props = defineProps<Props>();

const { position } = usePosition(props);
</script>

<template>
  <img :src="targetImage" class="absolute" :style="position" />
</template>
