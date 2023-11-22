## Usage

```js-vue
module.exports = {
  plugins: ["{{ data.id }}"],
};
```

### Parameters

<Parameters :items="data.parameters" />

<details class="details custom-block">
<summary>Usage example</summary>

```js-vue
module.exports = {
  plugins: [
    {
      name: "{{ data.id }}",
      params: {
{{Object.entries(data.parameters).filter(([k, v]) => v.default !== undefined).map(([k, v]) => `        ${k}: ${JSON.stringify(v.default)}`).join(",\n")}}
      }
    }
  ]
}
```

</details>

## Demo

<PluginDemo :plugin="data.id" />

<style module>
h1 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
