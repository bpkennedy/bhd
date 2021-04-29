<template>
  <c-box
    d="flex"
    align-items="center"
  >
    <c-link
      px="4"
      py="1"
      as="nuxt-link"
      to="/"
      rounded="md"
      :class="{'active': $nuxt.$route.name === 'index' }"
    >
      Home
    </c-link>
    <c-link
      px="4"
      py="1"
      as="nuxt-link"
      to="/lists"
      rounded="md"
      :class="{'active': $nuxt.$route.name === 'lists' }"
    >
      Lists
    </c-link>
    <c-link
      px="4"
      py="1"
      as="nuxt-link"
      to="/times"
      rounded="md"
      :class="{'active': $nuxt.$route.name === 'times' }"
    >
      Times
    </c-link>
    <c-link
      px="4"
      py="1"
      as="nuxt-link"
      to="/languages"
      rounded="md"
      :class="{'active': $nuxt.$route.name === 'languages' }"
    >
      Languages
    </c-link>
  </c-box>
</template>

<script>
import {
  CBox,
  CLink,
} from '@chakra-ui/vue'

export default {
  components: {
    CBox,
    CLink,
  },
}
</script>

<style lang="scss">
@import '../assets/css/main';

.active {
  background-color: $brand-999;
  color: $white;
}
</style>
