<template>
  <span>
    <button class="button handsfree-show-when-stopped" @click="startWebcam">
      Start Webcam ▶
    </button>
    <button class="button handsfree-show-when-loading" disabled>
      loading...
    </button>
    <button class="button handsfree-show-when-started" @click="stopWebcam">
      Stop Webcam
    </button>
  </span>
</template>

<script>
export default {
  mounted() {
    const $script = document.createElement("script");
    $script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild($script);
  },

  methods: {
    startWebcam() {
      window.handsfree = new Handsfree({ autostart: true });
    },

    stopWebcam() {
      window.handsfree.stop();
    }
  }
};
</script>
