<template>
  <div class="layout">
    <CThemeProvider>
      <CColorModeProvider>
        <c-box font-family="body" as="main">
          <c-reset />
          <c-box
            d="flex"
            w="100vw"
            h="100%"
            flex-dir="column"
            justify-content="flex-start"
            align-items="center"
          >
            <c-box
              flex="1"
              d="flex"
              w="100vw"
              h="100vh"
              max-w="74rem"
              flex-dir="column"
            >
              <nav-bar flex="1" />
              <Nuxt />
            </c-box>
          </c-box>
        </c-box>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox,
} from '@chakra-ui/vue'
import NavBar from '../components/NavBar.vue'

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    NavBar,
  },
}
</script>

<style lang="scss">
@import '../assets/css/main';

.layout {
  height: 100%;
}
</style>
