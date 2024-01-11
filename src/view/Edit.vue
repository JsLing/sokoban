<script setup lang="ts">
import EditElementView from "@/components/edit/EditElementView.vue";
import MapEdit from "@/components/edit/MapEdit.vue";
</script>

<template>
  <div>
    <div class="flex">
      <div class="w-4/6 bg-slate-500">
        <MapEdit />
      </div>
      <div>数据展示区k</div>
    </div>
    <div>
      <EditElementView />
    </div>
  </div>
</template>
