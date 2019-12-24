<template>
  <div class="columns">
    <div class="column">
      <h2>Chrome Extension</h2>
      <p>
        The Handsfree Chrome Extension is designed to help you browse the web
        completely handsfree. The extension requires little to no calibration
        and will be available for the
        <a href="https://www.google.com/chrome/">Google Chrome browser</a>.
      </p>
      <button disabled>coming very soon!</button>
    </div>
    <div class="column">
      <h2>Handsfree.js</h2>
      <p>
        The Chrome Extension and our demos are powered by Handsfree.js, a thin
        wrapper around computer vision models for the purpose of interacting
        with the web handsfree.
      </p>
      <router-link class="button" :to="{ path: '/code' }">
        Code with Handsfree.js
      </router-link>
    </div>
    <div class="column">
      <h2>Demos and Experiments</h2>
      <p>
        Click the button below to explore our site handsfree and get an early
        glimpse of upcoming features that will be added to the Handsfree Chrome
        Extension and Handsfree.js.
      </p>
      <ToggleWebcam :gotoDemo="true" />
    </div>
    <div class="column">
      <h2>Get Involved</h2>
      <p>
        Learn how you can get involved with contributing to Handsfree.js, the
        Handsfree Chrome Extension, and our mission of helping everyone on Earth
        access the web handsfree.
      </p>
      <button disabled>coming very soon!</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
