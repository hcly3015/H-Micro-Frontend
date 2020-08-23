<template>
  <div id="root" class="mainApp">
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import LayoutMain from "@/components/LayoutMain"

export default {
  name: 'App',
  props: {
    content: String,
    loading: Boolean,
  },
  components: {
    LayoutMain
  },
  computed: {
    isChildApp() {
      if(this.$route.path.match('sub-app')){
        return true;
      }else{
        return false;
      }
    }
  },
  methods: {
    ...mapMutations(["setMicroAppHtml", "setLoading"])
  },
  watch: {
    content(value,oldValue){
      this.setMicroAppHtml(value)
    },
    loading(value,oldValue) {
      this.setLoading(value)
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
      cursor: pointer;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
