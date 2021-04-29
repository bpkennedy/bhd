<template>
  <c-box display="flex" align-items="center">
    <c-text
      as="h2"
      font-family="EuropaBold"
      line-height="100%"
    >
      Sort:
    </c-text>
    <c-button-group
      :spacing="1"
      :ml="1"
    >
      <c-button
        :left-icon="BOOK_ICON"
        variant-color="brand"
        variant="outline"
        size="sm"
        :class="{'active': listFilter === BOOKS_LIST_NAME }"
        @click="handleFilterClick(BOOKS_LIST_NAME)"
      >
        Books
      </c-button>
      <c-button
        :left-icon="AUDIO_ICON"
        variant-color="brand"
        variant="outline"
        size="sm"
        :class="{'active': listFilter === PODCASTS_LIST_NAME }"
        @click="handleFilterClick(PODCASTS_LIST_NAME)"
      >
        Podcasts
      </c-button>
      <c-button
        :left-icon="VIDEO_ICON"
        variant-color="brand"
        variant="outline"
        size="sm"
        :class="{'active': listFilter === VIDEOS_LIST_NAME }"
        @click="handleFilterClick(VIDEOS_LIST_NAME)"
      >
        Videos
      </c-button>
    </c-button-group>
  </c-box>
</template>

<script lang="js">
import { CBox, CText } from '@chakra-ui/vue'
import { mapState } from 'vuex'
import {
  AUDIO_ICON,
  BOOK_ICON,
  VIDEO_ICON,
  BOOKS_LIST_NAME,
  PODCASTS_LIST_NAME,
  VIDEOS_LIST_NAME,
} from '@/constants'
import { LIST_FILTER_SELECTED_ACTION } from '@/store'

export default {
  components: {
    CBox,
    CText,
  },
  data () {
    return {
      BOOK_ICON,
      AUDIO_ICON,
      VIDEO_ICON,
      BOOKS_LIST_NAME,
      PODCASTS_LIST_NAME,
      VIDEOS_LIST_NAME,
    }
  },
  computed: {
    ...mapState(['listFilter']),
  },
  methods: {
    handleFilterClick (newValue) {
      this.$store.dispatch(LIST_FILTER_SELECTED_ACTION, newValue)
    },
  },
}
</script>
