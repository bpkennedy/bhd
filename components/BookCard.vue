<template>
  <c-box
    :w="['100%']"
    :mb="['2rem', '2rem', '2rem', '2rem']"
    shadow="md"
    rounded="lg"
    bg="white"
    tabindex="0"
  >
    <c-image rounded="md" w="100%" :src="book.image" />
    <c-box p="5">
      <c-flex align="baseline" mt="2">
        <c-text
          text-transform="uppercase"
          font-size="sm"
          font-weight="bold"
          color="pink.800"
        >
          {{ book.author }}
        </c-text>
        <c-badge
          ml="2"
          variant-color="pink"
        >
          Plus
        </c-badge>
      </c-flex>
      <c-text mt="2" font-size="xl" font-weight="semibold" line-height="short">
        {{ book.title }}
      </c-text>
      <c-text mt="2">
        {{ book.published }}
      </c-text>
    </c-box>
  </c-box>
</template>

<script lang="js">
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
}
</script>
