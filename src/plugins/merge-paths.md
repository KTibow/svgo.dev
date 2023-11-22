---
title: Merge Paths
id: mergePaths
default: true
parameters:
  force:
    default: false
  floatPrecision:
    description: Number of decimal places to round to, using conventional rounding rules.
    default: null
  noSpaceAfterFlags:
    description: If to omit spaces after flags. Flags are values that can only be <code>0</code> or <code>1</code> and are used by some path commands, namely <a href="https://developer.mozilla.org/docs/Web/SVG/Attribute/d#elliptical_arc_curve" target="_blank"><code>A</code> and <code>a</code></a>.
    default: false
---

<!--@include: ../parts/header.md-->

Merge multiple paths into one.

<!--@include: ../parts/plugin.md-->

## Implementation

https://github.com/svg/svgo/blob/main/plugins/mergePaths.js
