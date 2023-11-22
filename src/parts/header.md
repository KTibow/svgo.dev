<script setup>
  import Parameters from "../components/Parameters.vue";
  import PluginDemo from "../components/PluginDemo.vue";
  import { useData } from "vitepress";

  const { frontmatter: data } = useData()
</script>

# {{ data.title }} <Badge v-if="data.default" type="tip" text="Default" />
