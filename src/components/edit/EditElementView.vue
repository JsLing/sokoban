<script setup lang="ts">
import { floorEditElement, wallEditElement } from "@/store/edit/editElement";
import EditElement from "./EditElement.vue";
</script>
<template>
  <div>
    <h3>元素选择区：</h3>
    <div class="flex gap-2">
      <div>地图</div>
      <EditElement :edit-element="wallEditElement" />
      <EditElement :edit-element="floorEditElement" />
    </div>
  </div>
</template>
