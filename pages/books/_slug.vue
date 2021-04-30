<template>
  <c-box
    d="flex"
    height="100%"
    flex-direction="column"
    align-items="center"
    justify-content="center"
  >
    <c-image
      v-if="!loading"
      width="100%"
      :height="['10rem', '10rem', '14rem', '14rem', '14rem']"
      size="100%"
      object-fit="cover"
      :src="loadedItem.image"
      class="blur-image"
    />
    <h1>{{ slug }}</h1>
  </c-box>
</template>

<script>
import { CBox, CImage } from '@chakra-ui/vue'
import { mapState } from 'vuex'
import { DATA_IS_LOADING_ACTION, DATA_DONE_LOADING_ACTION } from '@/store'

export default {
  components: {
    CBox,
    CImage,
  },
  asyncData ({ params }) {
    const slug = params.slug
    return { slug }
  },
  data () {
    return {
      loadedItem: {},
    }
  },
  computed: {
    ...mapState(['selectedItem', 'loading']),
  },
  created () {
    this.shortLoadSelectedItem()
  },
  methods: {
    async shortLoadSelectedItem () {
      this.$store.dispatch(DATA_IS_LOADING_ACTION)
      if (!this.selectedItem.title) {
        this.loadedItem = await this.$content(`/books/${this.slug}`).fetch()
      } else {
        this.loadedItem = this.selectedItem
      }
      this.$store.dispatch(DATA_DONE_LOADING_ACTION)
    },
  },
}
</script>

<style lang="scss">
.blur-image {
  filter: blur(0.8rem);
}
</style>
