<script setup lang="ts">
import {
  useEditElementStore,
  type EditElement,
} from "@/store/edit/editElement";

interface Props {
  editElement: EditElement;
}
const props = defineProps<Props>();
function handleClick() {
  const { setCurrentEditElement } = useEditElementStore();
  setCurrentEditElement(props.editElement);
}
</script>

<template>
  <div @click="handleClick">
    <img :src="editElement.img" alt="" srcset="" />
  </div>
</template>
