<script setup lang="ts">
import { useEditCargoStore, type EditCargo } from "@/store/edit/editCargo";
import cargoImage from "../../assets/cargo.png";
import { STEP_EDIT, usePosition } from "../../composables/usePosition";

interface Props {
  cargo: EditCargo;
}

const { removeCargo } = useEditCargoStore();

const props = defineProps<Props>();
const { position } = usePosition(props.cargo, STEP_EDIT);

function handleRemoveCargo() {
  removeCargo(props.cargo);
}
</script>

<template>
  <img
    class="absolute"
    :src="cargoImage"
    :style="position"
    @dblclick="handleRemoveCargo"
  />
</template>
