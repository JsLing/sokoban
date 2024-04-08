<script setup lang="ts">
import {
  floorEditElement,
  playerEditElement,
  wallEditElement,
} from "@/store/edit/editElement";
import { useMapEditStore } from "@/store/edit/mapEdit";
import { toRefs, watchEffect } from "vue";
import EditElement from "./EditElement.vue";

const { initMap, updateMapRow, updateMapCol } = useMapEditStore();
const { row, col } = toRefs(useMapEditStore());

initMap();

watchEffect(() => {
  if (!row.value) return;
  updateMapRow();
});

watchEffect(() => {
  if (!col.value) return;
  updateMapCol();
});
</script>
<template>
  <div>
    <h3>元素选择区：</h3>
    <div class="m-2 space-y-2">
      <div>
        row: <input type="text" class="border border-blue-50" v-model="row" />
      </div>
      <div>
        col: <input type="text" class="border border-blue-50" v-model="col" />
      </div>
    </div>
    <div class="flex gap-2">
      <div>地图</div>
      <EditElement :edit-element="wallEditElement" />
      <EditElement :edit-element="floorEditElement" />
    </div>
    <div class="flex">
      <div>玩家</div>
      <EditElement :edit-element="playerEditElement" />
    </div>
  </div>
</template>
