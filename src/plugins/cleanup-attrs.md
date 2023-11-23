---
title: Cleanup Attributes
id: cleanupAttrs
default: true
parameters:
  newlines:
    description: Replace instances of a newline with a single whitespace.
    default: true
  trim:
    description: Trim whitespace characters from the start and end of attribute values.
    default: true
  spaces:
    description: Replace all instances of 2 or more whitespace characters with a single whitespace.
    default: true
---

<!--@include: ../parts/header.md-->

Removes redundant whitespaces from attribute values.

This will not modify the attribute keys, nor remove them if the value becomes empty after optimization.

<!--@include: ../parts/plugin.md-->

## Implementation

https://github.com/svg/svgo/blob/main/plugins/cleanupAttrs.js
