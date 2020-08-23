<template>
  <div class="managerview">
    <div class="managerview-header">
      <div class="managerview-menu-bar">
        <div class="menu-item" @click="goto('subapp1')">tab1</div>
        <div class="menu-item" @click="goto('subapp2')">tab2</div>
      </div>
    </div>
    <div class="managerview-main-bar">
      <div id="router-view" class="sup-app-view" v-html="microAppHtml"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'ManagerView',
  components: {
    
  },
  computed: mapState({
    microAppHtml: state => state.microApps.microAppHtml,
    loading: state => state.microApps.loading,
  }),
  methods: {
    goto(name) {
      this.$router.push({ name: name, query: { r: Math.random() } })
    }
  }
}
</script>

<style lang="scss" scoped>
  .managerview {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    .managerview-header {
      height: 50px;
      background: #ccc;
      .managerview-menu-bar {
        height: 100%;
        display: flex;
        .menu-item {
          display: flex;
          align-items: center;
          padding: 0 20px;
          cursor: pointer;
        }
      }
    }
    .managerview-main-bar {
      width: 100%;
      height: 100%;
      .sup-app-view {
        height: 100%;
      }
    }
  }
</style>