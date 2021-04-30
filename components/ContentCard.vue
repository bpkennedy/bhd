<template>
  <c-box
    :w="['100%']"
    :mt="['1rem', '1rem', '0', '0', '0']"
    mb="2rem"
    shadow="md"
    rounded="lg"
    bg="white"
    tabindex="0"
    @click="selectItem"
    @keypress.enter="selectItem"
  >
    <c-image
      rounded="md"
      w="100%"
      :src="contentThumbnail"
    />
    <c-box p="5">
      <c-flex
        align="baseline"
        mt="2"
      >
        <c-text
          text-transform="uppercase"
          font-size="sm"
          font-weight="bold"
          color="pink.800"
        >
          {{ contentCreator }}
        </c-text>
        <c-badge
          ml="2"
          variant-color="pink"
        >
          Plus
        </c-badge>
      </c-flex>
      <c-text
        mt="2"
        font-size="xl"
        font-weight="semibold"
        line-height="short"
      >
        {{ contentTitle }}
      </c-text>
      <c-text mt="2">
        {{ contentDate }}
      </c-text>
    </c-box>
  </c-box>
</template>

<script>
import { mapState } from 'vuex'
import { SELECTED_ITEM_ACTION } from '@/store'

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    itemType: {
      type: String,
      required: true,
    },
    contentTitle: {
      type: String,
      required: true,
    },
    contentDate: {
      type: String,
      required: true,
    },
    contentCreator: {
      type: String,
      required: true,
    },
    contentThumbnail: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(['listFilter']),
  },
  methods: {
    selectItem () {
      this.$store.dispatch(SELECTED_ITEM_ACTION, {
        item: this.item,
        itemType: this.listFilter,
        router: this.$nuxt.$router,
      })
    },
  },
}
</script>
