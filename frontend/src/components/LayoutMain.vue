<template>
  <div class="layoutmain">
    <div class="layoutmain-header"></div>
    <div class="layoutmain-container">
      <div class="layoutmain-menu-bar">
        <div class="menu-item" @click="goto('dashboard')">首页</div>
        <div class="menu-item" @click="goto('testpage1')">路由页面1</div>
        <div class="menu-item" @click="goto('testpage2')">路由页面2</div>
        <div class="menu-item" @click="goto('managerview')">微服务页面</div>
        <div class="menu-item" @click="goto('subapp3')">微服务页面3</div>
      </div>
      <div class="layoutmain-main-bar">
        <template v-if="!isChildApp">
          <router-view/>
        </template>
        <template v-show="isChildApp">
          <div id="router-view" v-html="microAppHtml"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'LayoutMain',
  components: {
    
  },
  computed: mapState({
    microAppHtml: state => state.microApps.microAppHtml,
    isLoading: state => state.microApps.loading,
  }),
  props: {
    loading: {
      type:Boolean,
      default(){
        return true;
      }
    },
    isChildApp: {
      type:Boolean,
      default(){
        return false;
      }
    },
    content: String,
  },
  methods: {
    goto(name) {
      this.$router.push({ name: name, query: { r: Math.random() } })
    }
  }
}
</script>

<style lang="scss" scoped>
  .layoutmain {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column;
    .layoutmain-header {
      height: 60px;
      border-bottom: 1px solid #ccc;
    }
    .layoutmain-container {
      display: flex;
      flex: 1;
      .layoutmain-menu-bar {
        width: 180px;
        border-right: 1px solid #ccc;
      }
      .layoutmain-main-bar {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>