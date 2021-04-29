<template>
  <c-box
    :h="{ base: '5rem' }"
    :max-height="{ base: '5rem' }"
    w="100%"
    d="flex"
    align-items="center"
    class="test"
  >
    <c-box px="4">
      <logo />
    </c-box>
    <c-box flex="1">
      <c-heading as="h1" size="lg">
        Talmid
      </c-heading>
    </c-box>
    <nav-links />
  </c-box>
</template>

<script>
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
}
</script>
