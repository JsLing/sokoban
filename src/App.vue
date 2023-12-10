<script setup lang="ts">
import { useMapStore } from "./store/map";
const { map } = useMapStore();
</script>

<template>
  <div class="bg-black">{{ map }}</div>
</template>
