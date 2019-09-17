<template>
  <div id="app">
    <router-view/>
    <v-footer v-if="$route.meta.showFooter"></v-footer>
  </div>
</template>
<script>
  import FooterBar from './components/footer-bar';
  export default {
    name:'app',
    components:{
      "v-footer":FooterBar
    }
  }
</script>
<style lang="scss">
#app {

}
#nav {

}
</style>
