## Usage

```js-vue
module.exports = {
  plugins: ["{{ data.id }}"],
};
```

<div v-if="data.parameters">

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
{{Object.entries(data.parameters).filter(([k, v]) => v?.default !== undefined).map(([k, v]) => `        ${k}: ${JSON.stringify(v.default)}`).join(",\n")}}
      }
    }
  ]
}
```

</details>

</div>

## Demo

<PluginDemo :plugin="data.id" />
