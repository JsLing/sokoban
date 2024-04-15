<script setup lang="ts">
import EditCargo from "@/components/edit/EditCargo.vue";
import EditElementView from "@/components/edit/EditElementView.vue";
import EditPlayer from "@/components/edit/EditPlayer.vue";
import MapEdit from "@/components/edit/MapEdit.vue";
import { useEditCargoStore } from "@/store/edit/editCargo";
const { cargos } = useEditCargoStore();
</script>

<template>
  <div>
    <div class="flex">
      <div class="w-4/6 bg-slate-500">
        <EditPlayer />
        <MapEdit />
        <template v-for="cargo in cargos" :key="cargo.id">
          <EditCargo :cargo="cargo" />
        </template>
      </div>
      <div>数据展示区k</div>
    </div>
    <div>
      <EditElementView />
    </div>
  </div>
</template>
