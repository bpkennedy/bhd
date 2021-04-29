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
      <c-heading
        as="h1"
        size="lg"
      >
        Talmid
      </c-heading>
    </c-box>
    <nav-links :bottom="bottom" />
  </c-box>
</template>

<script lang="js">
import {
  CBox,
  CHeading,
} from '@chakra-ui/vue'
import Logo from './Logo.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: {
    CBox,
    CHeading,
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
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  border-top: 1px solid #cbd5e0;
}
</style>
