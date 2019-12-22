<template><div></div></template>

<script>
export default {
  mounted() {
    const $script = document.createElement("script");
    $script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild($script);
  }
};
</script>