---
title: Config

image: /browsehandsfree-cover.jpg
description: Come learn how to configure Handsfree.js for use with head and eye tracking, segmentation and pose estimation, eye tracking and more (as they're implemented 😅)!
---

# Config

The following is a list of possible config options to pass into `new Handsfee()`. The values listed below are the defaults, or skip to the end for some example uses.

## Config Defaults

```js
let config = {
  // Whether Handsfree should automatically start after instantiation
  autostart: false,

  debugger: {
    // Where to inject the debugger into
    target: document.body,

    // Whether to show or hide the debugger (video feedback)
    enabled: false
  },

  // Which models you want to use
  models: {
    head: {
      enabled: true,

      // Run this model every x milliseconds (use 0 for every frame)
      throttle: 0
    },
    bodypix: {
      enabled: false,

      // Run this model every x milliseconds (use 0 for every frame)
      throttle: 0,

      // The inference method to use: ['segmentPerson', 'segmentPersonParts', 'segmentMultiPerson', 'segmentMultiPersonParts']
      method: 'segmentPerson',
      // The method to use to display debugging: ['toMask', 'toColoredPartMask']
      debugMethod: 'toMask',
      // @see https://github.com/tensorflow/tfjs-models/tree/master/body-pix#loading-the-model
      modelConfig: {
        architecture: 'MobileNetV1',
        outputStride: 16,
        multiplier: 0.75,
        quantBytes: 2
      }
    }
  },

  // Configs specific to plugins
  plugin: {
    head: {
      pointer: {
        // How many pixels to shift the pointer by
        offset: {
          x: 0,
          y: 0
        },

        // A multiplier that determines how sensitive the pointer is
        // .5 is half as sensitive, 2 is twice as much
        speed: {
          x: 1,
          y: 1
        }
      }
    },

    click: {
      // Morphs to watch for and their required confidences
      morphs: {
        // Right smile (pass 0 to disable this)
        0: 0.5,
        // Left smile (pass 0 to disable this)
        1: 0.5
      }
    },

    vertScroll: {
      // The multiplier to scroll by. Lower numbers are slower
      scrollSpeed: 0.15,
      // How many pixels from the the edge to scroll
      scrollZone: 100
    }
  },

  // Head morph activations
  // @see https://github.com/handsfree.js/handsfree/wiki/Head
  head: {
    morphs: {
      threshold: {
        smileRight: 0.7,
        smileLeft: 0.7,
        browLeftDown: 0.8,
        browRightDown: 0.8,
        browLeftUp: 0.8,
        browRightUp: 0.8,
        eyeLeftClosed: 0.4,
        eyeRightClosed: 0.4,
        mouthOpen: 0.3,
        mouthRound: 0.8,
        upperLip: 0.5
      }
    }
  }
}

const handsfree = new Handsfree(config)
```

## Examples

```js
// Shift the pointer up by 500 pixels and halve sensitivity
const handsfree = new Handsfree({
  plugin: {
    head: {
      pointer: {
        offset: {
          x: -500
        },
        speed: {
          x: 0.5,
          y: 0.5
        }
      }
    }
  }
})

// Set the div that the video feed is embedded in
const handsfree = new Handsfree({
  debugger: {
    target: document.querySelector('#my-debug-panel')
  }
})
```
