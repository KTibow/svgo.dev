---
title: Add Attributes to Elements
id: addAttributesToSVGElement
parameters:
  attributes:
    description: Attributes to add to the <code>&lt;svg&gt;</code> element. If key/value pairs are passed, the attributes and added with the paired value. If an array is passed, attributes are added with no key associated with them.
    default: null
  attribute:
---

<!--@include: ../parts/header.md-->

Adds attributes to the outer most [`<svg>`](https://developer.mozilla.org/docs/Web/SVG/Element/svg) element in the document. This is not an optimization and will increase the size of SVG documents.

:::danger

This plugin is only safe to use when a map of key/value pairs is passed. If you pass an array of keys to declare empty attributes, this will produce an malformed SVG that's only usable inline an HTML document.

:::

<!--@include: ../parts/plugin.md-->

## Implementation

https://github.com/svg/svgo/blob/main/plugins/addAttributesToSVGElement.js
