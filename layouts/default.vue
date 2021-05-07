<template>
  <div>
    <CThemeProvider>
      <CColorModeProvider>
        <c-box
          font-family="body"
          as="main"
        >
          <c-reset />
          <loader />
          <c-box
            d="flex"
            w="100vw"
            flex-dir="column"
            justify-content="flex-start"
            align-items="center"
          >
            <c-box
              flex="1"
              d="flex"
              w="100vw"
              max-w="74rem"
              flex-dir="column"
            >
              <CPseudoBox
                :display="[
                  'none',
                  'none',
                  'block',
                  'block',
                  'block',
                ]"
                flex="1"
              >
                <nav-bar />
              </CPseudoBox>
              <Nuxt />
              <CPseudoBox
                :display="[
                  'block',
                  'block',
                  'none',
                  'none',
                  'none',
                ]"
                flex="1"
                mt="12"
              >
                <nav-bar :bottom="true" />
              </CPseudoBox>
            </c-box>
          </c-box>
          <background />
        </c-box>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>

<script lang="js">
import Loader from '../components/Loader.vue'
import NavBar from '../components/NavBar.vue'
import Background from '../components/Background.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Loader,
    Background,
  },
}
</script>
