<template>
  <div>
    <div class="background-clip">
      <div class="animated-gradient" />
    </div>
    <c-box class="top-background" :height="['4rem', '4rem', '5rem', '5rem', '5rem']" />
  </div>
</template>

<script lang="js">
import {
  CBox,
} from '@chakra-ui/vue'

export default {
  components: {
    CBox,
  },
}
</script>

<style lang="scss">
@import '../assets/css/main.scss';

$blue-1: rgba(32, 156, 238, 1);
$blue-2: rgba(16, 141, 224, 1);
$blue-3: rgba(0, 107, 179, 1);

.background-clip {
  z-index: -1;
  width: 120vw;
  height: 80%;
  transform: skewY(-12deg);
  transform-origin: 0;
  position: absolute;
  top: 5rem;
  left: -5rem;
  overflow: hidden;
}

.animated-gradient {
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(-45deg, $blue-1, $blue-3, $indigo-300);
  background-size: 200% 200%;
  overflow: hidden;
  filter: blur(2rem);
  animation: GradientBackground 10s ease infinite;
}

.top-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: -1;
}

@keyframes GradientBackground {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

</style>
