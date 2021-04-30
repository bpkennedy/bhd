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
    <c-image
      width="100%"
      :height="['14rem', '14rem', '14rem', '14rem', '14rem']"
      :mt="['4rem', '4rem', '0', '0', '0']"
      size="100%"
      object-fit="contain"
      :src="loadedItem.thumbnailUrl"
    />
    <c-box
      px="10%"
      width="100%"
    >
      <vue-plyr>
        <audio controls playsinline>
          <source
            :src="loadedItem.mediaUrl"
            type="audio/mp3"
          />
        </audio>
      </vue-plyr>
    </c-box>
    <c-box
      width="100%"
      display="flex"
      flex-direction="column"
      justify-content="center"
      align-items="center"
    >
      <c-text
        as="h1"
        font-family="EuropaBold"
        font-size="xl"
        mb="1"
      >
        {{ loadedItem.title }}
      </c-text>
      <c-text
        as="h2"
        color="purple"
        font-family="EuropaLight"
        font-size="lg"
        mb="1"
      >
        {{ loadedItem.seasonTitle }}
      </c-text>
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
import { CBox, CText } from '@chakra-ui/vue'
import { mapState } from 'vuex'
import { DATA_IS_LOADING_ACTION, DATA_DONE_LOADING_ACTION } from '@/store'

export default {
  components: {
    CBox,
    CText,
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
        this.loadedItem = await this.$content(`/podcasts/${this.slug}`).fetch()
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
@import '../../assets/css/main.scss';

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

  a {
    cursor: pointer;
    color: $blue-300;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
