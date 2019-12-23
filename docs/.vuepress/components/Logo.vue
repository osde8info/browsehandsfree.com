<template>
  <div>
    <LogoSVG class="logo-animated-slowly" :style="styles" />
  </div>
</template>

<script>
import LogoSVG from './LogoSVG'

export default {
  components: { LogoSVG },
  props: ['styles']
}
</script>
