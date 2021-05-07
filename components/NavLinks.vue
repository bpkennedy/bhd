<template>
  <c-box
    d="flex"
    align-items="center"
    justify-content="space-evenly"
    width="100%"
    height="100%"
    max-width="20rem"
    mx="4"
    :class="{'bottom-max-width': bottom }"
  >
    <nav-link
      route="/"
      route-name="index"
      icon-name="home"
    />
    <nav-link
      route="/lists"
      route-name="lists"
      icon-name="stream"
    />
    <nav-link
      route="/times"
      route-name="times"
      icon-name="place-of-worship"
    />
    <nav-link
      route="/languages"
      route-name="languages"
      icon-name="torah"
    />
  </c-box>
</template>

<script lang="js">
import NavLink from './NavLink.vue'

export default {
  components: {
    NavLink,
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
.bottom-max-width {
  max-width: 100%;
}
</style>
