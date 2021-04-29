<template>
  <div>Languages page</div>
</template>

<script lang="js">
import { LANGUAGES_VIEW_NAME } from '@/constants'
import { VIEW_LOADED_ACTION } from '~/store'

export default {
  created () {
    this.$store.dispatch(VIEW_LOADED_ACTION, { viewName: LANGUAGES_VIEW_NAME, nuxtContent: this.$content })
  },
}
</script>
