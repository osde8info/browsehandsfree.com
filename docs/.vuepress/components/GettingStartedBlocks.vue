<template>
  <div class="columns">
    <div class="column">
      <h2>Chrome Extension</h2>
      <p>
        The Handsfree Chrome Extension is designed to help you browse the web
        completely handsfree. The extension requires little to no calibration
        and will be available for the
        <a
          href="https://www.google.com/chrome/"
        >Google Chrome browser</a>.
      </p>
      <router-link class="button" :to="{ path: '/browser/' }">Learn more</router-link>
    </div>
    <div class="column">
      <h2>Handsfree.js</h2>
      <p>
        The Chrome Extension and our demos are powered by Handsfree.js, a thin
        wrapper around computer vision models for the purpose of interacting
        with the web handsfree.
      </p>
      <router-link class="button" :to="{ path: '/code' }">Read the docs</router-link>
    </div>
    <div class="column">
      <h2>Demos and Experiments</h2>
      <p>Come try out some of our handsfree demos right in your browser, including a handsfree YouTube 360 player and a handsfree Google Slides controller!</p>
      <p>
        <button disabled>coming very soon!</button>
      </p>
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
