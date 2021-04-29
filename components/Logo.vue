<template>
  <c-image
    h="5rem"
    w="5rem"
    :src="require('assets/burningHeartLogo.svg')"
    alt="Burning Heart Discipleship Logo"
  />
</template>

<script>
import {
  CImage,
} from '@chakra-ui/vue'

export default {
  components: {
    CImage,
  },
}
</script>
