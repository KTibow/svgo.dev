<script setup>
import { optimize } from "svgo";
import { ref, computed } from "vue";

const props = defineProps({ plugin: String });

const input = ref(
  `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="60" height="60" fill="red" />
</svg>`
);
const config = ref(
  `{
  plugins: [
    "${props.plugin}"
  ]
}`
);
const output = computed(() => {
  try {
    const configData = new Function(`return ${config.value}`)();
    return { data: optimize(input.value, configData).data };
  } catch (e) {
    return { error: e };
  }
});
</script>

<template>
  <div :class="$style.container">
    <textarea :class="$style.area" v-model="input"></textarea>
    <textarea :class="$style.area" v-model="config"></textarea>
    <textarea
      :class="$style.area"
      readonly
      v-html="output.data ? output.data : output.error"
    ></textarea>
    <div v-html="output.data"></div>
  </div>
</template>

<style module>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 17rem 17rem;
  gap: 0.5rem;
}
.container > * {
  background-color: var(--vp-c-default-soft);
  border-radius: 0.4rem;
}
.container > :nth-child(1) {
  border-top-left-radius: 0.75rem;
}
.container > :nth-child(2) {
  border-top-right-radius: 0.75rem;
}
.container > :nth-child(3) {
  border-bottom-left-radius: 0.75rem;
}
.container > :nth-child(4) {
  border-bottom-right-radius: 0.75rem;
}
.area {
  margin: 0;
  padding: 1rem;
  font-size: 0.9rem;
  font-family: var(--vp-font-family-mono);
  resize: none;
}
</style>
