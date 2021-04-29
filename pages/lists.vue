<template>
  <c-box
    d="flex"
    flex-direction="column"
  >
    <c-pseudoBox
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
        :cols="{default: 4, 1280: 4, 992: 3, 768: 2, 480: 1}"
        :gutter="{default: '1rem', 1280: '1rem', 992: '1.5rem', 768: '2rem'}"
      >
        <book-card
          v-for="book in filteredListItems"
          :key="book.title"
          :book="book"
        />
      </masonry>
    </c-box>
  </c-box>
</template>

<script lang="js">
import { CBox, CPseudoBox } from '@chakra-ui/vue'
import { mapGetters } from 'vuex'
import { LISTS_VIEW_NAME } from '@/constants'
import BookCard from '../components/BookCard.vue'
import ListFilter from '../components/ListFilter.vue'
import { VIEW_LOADED_ACTION, FILTERED_LIST_ITEMS_GETTER } from '~/store'

export default {
  components: {
    CBox,
    CPseudoBox,
    BookCard,
    // eslint-disable-next-line vue/no-unused-components
    ListFilter,
  },
  computed: {
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
