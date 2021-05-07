<template>
  <c-box
    position="absolute"
    top="-4rem"
    left="-2rem"
    height="100vh"
    width="100vw"
    user-select="none"
    pointer-events="none"
  >
    <c-spinner
      v-show="loading"
      position="absolute"
      left="50%"
      top="50%"
      color="blue.500"
      size="xl"
      z-index="9"
    />
  </c-box>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['loading']),
  },
}
</script>
