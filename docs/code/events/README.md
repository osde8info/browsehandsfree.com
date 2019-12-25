---
title: Events
---

# Events

The following `handsfree.emit` are called:

```js
// Called when .start()
handsfree.on('started')
```

To listen to these events without the `handsfree` instance, use the `document` instead by prefacing the events with `handsfree-`:

```js
document.addEventListener(`handsfree-started`, callback)
document.addEventListener(`handsfree-${eventName}`, callback)
```
