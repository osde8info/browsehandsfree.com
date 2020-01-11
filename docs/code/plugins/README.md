---
title: Plugins

image: /browsehandsfree-cover.jpg
description: Come learn how to quickly build functionality around the pose data and gestures, while mixing-and-matching multiple models together!
---

# Plugins

## Simple plugin

Using `Handsfree.use(name, callback)` adds a `callback` to be called on webcam frame for ever instance. The callback receives a single object, `instance`. Here's a simple example:

```js
// See if the user is smirking
Handsfree.use('demo', (instance) => {
  console.log(instance.head.state.smirk)
})

// or try with destructuring
Handsfree.use('demo', ({ head }) => {
  console.log(head.state.smirk)
})
```

## Advanced plugin

For more control, you can pass a object instead of a callback with the following methods and properties:

```js
Handsfree.use(name, {
  // (default: true) Whether this plugin should be enabled
  enabled: true,

  // Called once for every webcam frame
  onFrame(instance) {},

  // Called after Handsfree.disable(name) is called
  onDisable(instance) {},

  // Called after Handsfree.enable(name) is called
  onEnable(instance) {}
})
```

Using this way to add plugins, we can now rewrite the first example as:

```js
Handsfree.use('demo', {
  onFrame({ head }) {
    console.log(head.state.smirk)
  }
})
```

## Overwriting and disabling plugins

Using `Handsfree.use()` with the same plugin name overwrites the existing one. Once a plugin is in use, you can disable and enable it with the following:

```js
Handsfree.disable(pluginName)
Handsfree.enable(pluginName)
```

If a plugin has an `onDisable` or `onEnable` method, then these will now be called.

---

# Plugins List

## `head.click`

### Config

```js
new Handsfree({
  plugin: {
    head: {
      click: {
        // How often in milliseconds to trigger clicks
        // - Use 0 to run as often as possible
        throttle: 50,

        // Max number of frames to keep down
        // - Setting this to a higher number fires this many clicks in a row
        // - Use to help make clicking on small elements easier, but multiple clicks may be triggered
        maxMouseDownedFrames: 1,

        // Morphs to watch for and their required confidences
        morphs: {
          0: 0.25,
          1: 0.25
        }
      }
    }
  }
}
```

### Methods

```js
/**
 * Sets how often a click is registered, in milliseconds
 * - Use this method to update the throttle, manually setting
 *   Handsfree.plugins.head.click.config.throttle won't work
 *
 * @param {Integer} throttle How often to register a click, in milliseconds
 */
Handsfree.plugins.head.click.updateClickThrottle(throttle)
```
