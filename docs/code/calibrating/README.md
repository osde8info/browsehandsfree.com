---
title: Calibrating

image: /browsehandsfree-cover.jpg
description: Check out the different classes that are for styling your handsfree plugins!
---

# Calibrating

Handsfree.js comes with a calibration method, `handsfree.startCalibration()`, that updates `Handsfree.plugins.head.pointer.config.offset.x` and `.y` until the pointer is calibrated to the users head pose. Currently this only works for the face pointer. Here's what the calibration looks like:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Added a calibration workflow, so that you can browse handsfree regardless of your seating position or webcam orientation <a href="https://t.co/J9vj7HxQzv">pic.twitter.com/J9vj7HxQzv</a></p>&mdash; Oz Ramos (@HeyOzRamos) <a href="https://twitter.com/HeyOzRamos/status/1217188656139554816?ref_src=twsrc%5Etfw">January 14, 2020</a></blockquote>

<TweetLoader />

## Configuration

```js
handsfree = new Handsfree({
  // Represents the calibrator settings
  calibrator: {
    // (optional) The target element to act as the calibrator wrapping div
    target: null,
    // The message to display over the marker, can be HTML
    instructions: 'Point head towards center of circle below',
    // (optional if .target === null, otherwise required) The target element to act as the calibrator target (should be inside target)
    marker: null
  }
})
```

By default, if `handsfree.config.calibrator.target` is null then a calibration overlay is created with the following markup:

```html
<div class="handsfree-calibrator-wrap">
  <p>{{ handsfree.config.calibrator.instructions }}</p>
  <div class="handsfree-calibrator-marker"></div>
</div>
```

To set the instructions that are displayed above the marker, set `handsfree.config.calibrator.instructions`. Or if you prefer, you can pass in an HTML element into `handsfree.config.calibrator.target` and supply the element you'd like to use as a marker into `handsfree.config.calibrator.marker`.

When setting the `.target`, make sure to style it with `{pointer-events: none; opacity: 0}`. When calibrating, this element will receive a `.handsfree-visible` class which fades the calibrator in.
