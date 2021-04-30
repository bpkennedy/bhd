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
      :top="['0', '0', '5rem', '5rem', '5rem']"
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
    <c-image
      width="100%"
      :height="['14rem', '14rem', '14rem', '14rem', '14rem']"
      size="100%"
      object-fit="cover"
      :src="loadedItem.image"
      class="blur-image"
    />
    <c-box
      class="book-snippet"
      z-index="2"
      display="flex"
    >
      <c-image
        width="auto"
        height="12rem"
        size="100%"
        object-fit="contain"
        border="4px solid white"
        rounded="lg"
        ml="4"
        :src="loadedItem.image"
      />
      <c-box px="2">
        <c-text
          as="h1"
          font-family="EuropaBold"
          font-size="2xl"
          mb="1"
          class="legible-text"
        >
          {{ loadedItem.title }}
        </c-text>
      </c-box>
    </c-box>
    <c-box display="flex" flex-direction="column" p="6" pt="1">
      <c-box
        display="flex"
        justify-content="left"
        align-items="center"
        mb="6"
      >
        <c-box
          display="flex"
          flex-direction="column"
          justify-content="center"
          align-items="left"
        >
          <c-text
            as="i"
            font-size="sm"
          >
            {{ loadedItem.author }}
          </c-text>
          <c-text
            font-size="xs"
          >
            {{ loadedItem.published }}
          </c-text>
        </c-box>
      </c-box>
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
import { CBox, CText, CImage } from '@chakra-ui/vue'
import { mapState } from 'vuex'
import { DATA_IS_LOADING_ACTION, DATA_DONE_LOADING_ACTION } from '@/store'

export default {
  components: {
    CBox,
    CText,
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
    returnToLists () {
      this.$nuxt.$router.push('/lists')
    },
  },
}
</script>

<style lang="scss">
.slug {
  background: white;
}

.blur-image {
  filter: blur(0.8rem);
}

.book-snippet {
  width: 100%;
  margin-top: -10rem;
}

.legible-text {
  color: black;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
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
