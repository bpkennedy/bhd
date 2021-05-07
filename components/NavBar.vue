<template>
  <c-box
    :h="{ base: '5rem' }"
    :max-height="{ base: '5rem' }"
    w="100%"
    d="flex"
    align-items="center"
    :class="{'bottom-nav': bottom }"
  >
    <c-box
      v-if="!bottom"
      px="4"
    >
      <logo />
    </c-box>
    <c-box
      v-if="!bottom"
      flex="1"
    >
      <c-stack>
        <c-text
          as="h1"
          font-size="2xl"
          font-family="EuropaBold"
          size="lg"
          class="no-space h1-line-height"
        >
          Burning Heart
        </c-text>
        <c-text font-family="EuropaLightItalic" color="purple">
          Discipleship
        </c-text>
      </c-stack>
    </c-box>
    <nav-links :bottom="bottom" />
  </c-box>
</template>

<script lang="js">
import Logo from './Logo.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: {
    Logo,
    NavLinks,
  },
  props: {
    bottom: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.h1-line-height {
  line-height: 1.5rem;
}

.no-space {
  margin: 0;
  padding: 0;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  border-top: 1px solid #cbd5e0;
}
</style>
