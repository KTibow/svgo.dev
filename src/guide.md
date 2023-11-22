# Getting Started

## Overview

SVGO (short for SVG Optimizer) is a Node.js library and command-line application for optimizing SVG files.

SVG files, especially those exported from vector editors, usually contain a lot of redundant information. This includes editor metadata, comments, hidden elements, default or suboptimal values, and other stuff that can be safely removed or converted without affecting the rendering result.

## Install in Node

SVGO requires Node >14.

```bash
npm install -g svgo # for npm
pnpm add -g svgo # for pnpm
yarn global add svgo # for yarn
```
