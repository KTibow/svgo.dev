# preset-default

SVGO runs with a default preset that has the plugin ID `preset-default`. This is the default set of plugins that are used when not explicitly specified or overridden elsewhere.

:::info
If you aren't using SVGO directly, like through [SVGR](https://github.com/gregberge/svgr), the default plugins may be different from the default preset.
:::

## Plugins List

The following plugins are included in `preset-default`, in the order that they're executed:

_the plugins would go here if i actually copied over all the pages_

## Disable a Plugin

Sometimes a specific plugin might not be appropriate for your workflow. You can continue using `preset-default` while disabling any plugin by using the `overrides` parameter.

In `overrides`, reference the plugin ID and set it to `false` to disable it:

```js
module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
};
```

Alternatively, you can also drop `default-preset` entirely, and configure your own plugin pipeline from scratch, with only the desireable plugins:

```js
module.exports = {
  plugins: [
    "removeDoctype",
    "removeXMLProcInst",
    "minifyStyles",
    "sortAttrs",
    "sortDefsChildren",
  ],
};
```
