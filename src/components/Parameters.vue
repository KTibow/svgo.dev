<script setup>
import { computed } from "vue";

const props = defineProps({ items: Object });
const items = computed(() =>
  Object.fromEntries(
    Object.entries(props.items).filter(([k, v]) => v.description)
  )
);
</script>

<template>
  <div
    class="custom-block info"
    :class="$style.parameter"
    v-for="(value, key) in items"
    :key="key"
  >
    <code class="custom-block-title" :class="$style.title">{{ key }}</code>
    <span v-html="value.description"></span>
  </div>
</template>

<style module>
.parameter {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.title {
  background-color: transparent !important;
  padding: 0 !important;
}
</style>
