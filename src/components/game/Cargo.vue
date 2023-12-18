<script setup lang="ts">
import cargoImage from "../../assets/cargo.png";
import { usePosition } from "../../composables/usePosition";

interface Props {
  x: number;
  y: number;
}

const props = defineProps<Props>();

const { position } = usePosition(props);
</script>

<template>
  <img :src="cargoImage" class="absolute" :style="position" />
</template>
