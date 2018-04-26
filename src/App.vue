<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
 import NavBar from './components/Navbar'
 import Footer from './components/Footer'

export default {
  name: 'App',

  data () {
    return {
      messages: []
    }
  },
  components: {
    NavBar,
    Footer
  },
}
</script>

<style>
</style>
