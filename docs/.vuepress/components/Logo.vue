<template>
  <div style="height: 151px; position: relative;">
    <LogoSVG
      class="logo-animated-slowly handsfree-show-when-stopped-or-loading"
      :style="styles"
    />
    <div
      ref="animatedLogoWrap"
      class="handsfree-show-when-started"
      style="position: relative; left: -100px"
    >
      <LogoSVG class="logo-animated" :style="styles" />
      <LogoSVG class="logo-animated" :style="styles" />
      <LogoSVG class="logo-animated" :style="styles" />
      <LogoSVG class="logo-animated" :style="styles" />
      <LogoSVG class="logo-animated" :style="styles" />
      <LogoSVG class="logo-animated" :style="styles" />
      <LogoSVG class="logo-animated" :style="styles" />
      <LogoSVG class="logo-animated" :style="styles" />
      <LogoSVG class="logo-animated" :style="styles" />
      <LogoSVG class="logo-animated" :style="styles" />
      <LogoSVG class="logo-animated" :style="styles" />
      <LogoSVG class="logo-animated" :style="styles" />
    </div>
  </div>
</template>

<script>
import LogoSVG from './LogoSVG'

export default {
  components: { LogoSVG },
  props: ['styles'],

  mounted() {
    document.addEventListener('started', () => {
      const bounds = this.$refs.animatedLogoWrap.getBoundingClientRect()

      window.confetti({
        startVelocity: 35,
        spread: 360,
        particleCount: 1000,
        origin: {
          x: (bounds.left + 100) / window.innerWidth,
          y: (bounds.top + 75) / window.innerHeight
        }
      })
    })
  }
}
</script>
