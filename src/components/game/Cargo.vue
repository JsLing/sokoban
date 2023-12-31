<script setup lang="ts">
import cargoImage from "../../assets/cargo.png";
import cargoOnTargetImage from "../../assets/cargo_on_target.png";
import { usePosition } from "../../composables/usePosition";
import { type Cargo } from "../../store/cargo";

interface Props {
  cargo: Cargo;
}

const props = defineProps<Props>();
const { position } = usePosition(props.cargo);
</script>

<template>
  <img
    class="absolute"
    :src="cargo.onTarget ? cargoOnTargetImage : cargoImage"
    :style="position"
  />
</template>
