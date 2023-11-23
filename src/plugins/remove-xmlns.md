---
title: Remove XML Namespace
id: removeXMLNS
---

<!--@include: ../parts/header.md-->

Removes the `xmlns` attribute from the top-most `<svg>` element in the document.

It's recommended to use this plugin if you intend to inline SVGs into an HTML document. HTML does not support explicit namespaces, so these are ignored by the browser anyway.

:::tip

This plugin pairs well with the [Remove XLink](/docs/plugins/remove-xlink/) plugin. Remove XLink drops XLink namespaces and migrates references to them to the modern equivalent, supported by SVG 2 and inline an HTML document. When using this, it's recommended to enable Remove XLink too.

:::

:::warning

This plugin renders SVGs unusable as standalone assets, in HTML `<img>` elements, or CSS [pseudo-elements](https://developer.mozilla.org/docs/Web/CSS/CSS_pseudo-elements).

:::

<!--@include: ../parts/plugin.md-->

## Implementation

https://github.com/svg/svgo/blob/main/plugins/removeXMLNS.js
