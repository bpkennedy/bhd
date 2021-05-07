<template>
  <c-box
    v-if="!loading"
    d="flex"
    height="100%"
    flex-direction="column"
    align-items="center"
    justify-content="center"
    :mb="['1rem', '1rem', '0', '0', '0']"
    class="slug"
  >
    <c-box
      class="back-icon-position"
      top="0"
      p="1.25rem"
      width="4rem"
      z-index="9"
      @click="returnToLists"
    >
      <c-icon
        name="long-arrow-alt-left"
        class="colored-icon"
        size="1.75rem"
        p=".25rem"
      />
    </c-box>
    <c-box
      :pl="['0', '0', '5rem', '5rem', '5rem']"
      :mt="['4rem', '4rem', '0', '0', '0']"
      width="100%"
    >
      <vue-plyr>
        <div class="plyr__video-embed">
          <iframe
            :src="`${loadedItem.mediaUrl}?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`"
            allowfullscreen
            allowtransparency
            allow="autoplay"
          />
        </div>
      </vue-plyr>
    </c-box>
    <c-box display="flex" flex-direction="column" p="6" pt="1">
      <c-text
        as="h2"
        font-family="EuropaBold"
        font-size="md"
        mb="2"
      >
        Synopsis
      </c-text>
      <c-text
        as="p"
        mb="6"
      >
        {{ loadedItem.synopsis }}
      </c-text>
      <c-text
        as="h2"
        font-family="EuropaBold"
        font-size="md"
        mb="2"
      >
        Commentary
      </c-text>
      <nuxt-content :document="loadedItem" />
    </c-box>
  </c-box>
</template>

<script>
import { mapState } from 'vuex'
import { DATA_IS_LOADING_ACTION, DATA_DONE_LOADING_ACTION } from '@/store'

export default {
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
        this.loadedItem = await this.$content(`/videos/${this.slug}`).fetch()
      } else {
        this.loadedItem = this.selectedItem
      }
      this.$store.dispatch(DATA_DONE_LOADING_ACTION)
    },
    returnToLists () {
      this.$nuxt.$router.push('/lists')
    },
  },
}
</script>

<style lang="scss">
.slug {
  background: white;
  position: relative;
}

.back-icon-position {
  position: absolute;
  left: 0;
}

.colored-icon {
  color: white;
  background: black;
  border-radius: 50%;
}

.plyr {
  width: 100%;
}

.nuxt-content {
  p {
    display: block;
    margin: 1em 1em 0 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
