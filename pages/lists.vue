<template>
  <c-box
    d="flex"
    flex-direction="column"
  >
    <CPseudoBox
      as="list-filter"
      width="100%"
      :position="['fixed', 'fixed', 'initial', 'initial', 'initial']"
      :background="['white', 'white', 'none', 'none', 'none']"
      :shadow="['md', 'md', 'none', 'none', 'none']"
      :p="4"
    />
    <c-box
      class="card-container"
      :mt="[12, 12, 0, 0, 0]"
    >
      <masonry
        v-if="listFilter === BOOKS_LIST_NAME"
        :cols="{default: 4, 1280: 4, 992: 3, 768: 2, 480: 1}"
        :gutter="{default: '1rem', 1280: '1rem', 992: '1.5rem', 768: '2rem'}"
      >
        <content-card
          v-for="book in filteredListItems"
          :key="book.title"
          :item="book"
          :item-type="BOOKS_LIST_NAME"
          :content-title="book.title"
          :content-creator="book.creator"
          :content-date="book.published"
          :content-thumbnail="book.thumbnailUrl"
        />
      </masonry>
      <masonry
        v-else-if="listFilter === VIDEOS_LIST_NAME"
        :cols="{default: 4, 1280: 4, 992: 3, 768: 2, 480: 1}"
        :gutter="{default: '1rem', 1280: '1rem', 992: '1.5rem', 768: '2rem'}"
      >
        <content-card
          v-for="video in filteredListItems"
          :key="video.title"
          :item="video"
          :item-type="VIDEOS_LIST_NAME"
          :content-title="video.title"
          :content-creator="video.creator"
          :content-date="video.published"
          :content-thumbnail="video.thumbnailUrl"
        />
      </masonry>
      <masonry
        v-else-if="listFilter === PODCASTS_LIST_NAME"
        :cols="{default: 4, 1280: 4, 992: 3, 768: 2, 480: 1}"
        :gutter="{default: '1rem', 1280: '1rem', 992: '1.5rem', 768: '2rem'}"
      >
        <content-card
          v-for="podcast in filteredListItems"
          :key="podcast.title"
          :item="podcast"
          :item-type="PODCASTS_LIST_NAME"
          :content-title="podcast.title"
          :content-creator="podcast.creator"
          :content-date="podcast.published"
          :content-thumbnail="podcast.thumbnailUrl"
        />
      </masonry>
    </c-box>
  </c-box>
</template>

<script lang="js">
import { mapGetters, mapState } from 'vuex'
import {
  LISTS_VIEW_NAME,
  BOOKS_LIST_NAME,
  VIDEOS_LIST_NAME,
  PODCASTS_LIST_NAME,
} from '@/constants'
import ContentCard from '../components/ContentCard.vue'
import ListFilter from '../components/ListFilter.vue'
import { VIEW_LOADED_ACTION, FILTERED_LIST_ITEMS_GETTER } from '~/store'

export default {
  components: {
    ContentCard,
    // eslint-disable-next-line vue/no-unused-components
    ListFilter,
  },
  data () {
    return {
      BOOKS_LIST_NAME,
      VIDEOS_LIST_NAME,
      PODCASTS_LIST_NAME,
    }
  },
  computed: {
    ...mapState(['listFilter']),
    ...mapGetters({
      filteredListItems: FILTERED_LIST_ITEMS_GETTER,
    }),
  },
  mounted () {
    this.$store.dispatch(VIEW_LOADED_ACTION, { viewName: LISTS_VIEW_NAME, nuxtContent: this.$content })
  },
}
</script>

<style lang="scss">
@import '../assets/css/main';

.card-container {
  padding: $card-gutter / 2;
}
</style>
