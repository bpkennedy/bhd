<template>
  <c-link
    d="flex"
    align-items="center"
    justify-content="center"
    flex-direction="column"
    height="100%"
    width="100%"
    as="nuxt-link"
    :to="route"
    rounded="md"
    :class="{'active': $nuxt.$route.name === routeName }"
  >
    <c-icon
      :name="iconName"
      :class="{'active': $nuxt.$route.name === routeName }"
      style="text-transform: capitalize;"
    />
    {{ routeName !== 'index' ? routeName : 'home' }}
  </c-link>
</template>

<script lang="js">
export default {
  props: {
    routeName: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: true,
    },
  },
}
</script>
