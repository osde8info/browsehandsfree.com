---
title: Getting Started

image: /browsehandsfree-cover.jpg
description: Come learn how to setup Handsfree.js through CDN or through NPM, so that you can get started on making handsfree experiences and assistive tech!
---

# Getting Started

Handsfree.js is a thin wrapper around popular computer vision libraries: we handle the initialization code, which is different from model to model, and provide a single "[game loop](https://en.wikipedia.org/wiki/Game_programming#Game_structure)" for all running models to share.

## Using a CDN

The easiest way to get started is to use our CDN, hosted on [unpkg](https://unpkg.com/):

<!-- prettier-ignore-start -->
```html
<link rel="stylesheet" href="https://unpkg.com/handsfree@6.1.1/dist/handsfree.css" />
<script src="https://unpkg.com/handsfree@6.1.1/dist/handsfree.js"></script>
```
<!-- prettier-ignore-end -->

Additional JavaScript files will be fetched from this CDN depending on the specific models you are using. This will add the `Handsfree` class to the global `window` namespace.

## Using your own assets

If you'd rather control all assets (eg for using offline or in production), then you can build them yourself. To do so, run the following from our project's root:

    yarn bundle

This will create a folder at `/dist/handsfreejs` with the following contents:

```bash
|+-- js/
|   |    # The Weboji head tracking library
|   |+-- jeelizFaceTransfer.js
|   |    # The model weights for the library
|   |+-- jeelizFaceTransferNNC.js
|
# Core styles
+ handsfree.css
+ handsfree.css.map
# The handsfree.js library
+ handsfree.js
+ handsfree.js.map
```

Place this directory anywhere on your server and then simply link to the `handsfree.js` and `handsfree.css`. Handsfree.js will look for additional scripts depending on the models being used, so make sure to keep the files in this directory together.

This will add the `Handsfree` class to the global `window` namespace.

## Using from Node

If you'd like to use Handsfree.js from within Node (eg for desktop control) or would like to bundle Handsfree.js as a dependency to your project then first add Handsfree.js to your project:

```bash
npm install handsfree
# or
yarn handsfree
```

Then, `import` or `require` Handsfree:

```js
import Handsfree from 'handsfree'
```

::: danger 🐞 Bug
Currently this will still add `Handsfree` to the global window instead of just a module. This will be fixed soon!
:::
