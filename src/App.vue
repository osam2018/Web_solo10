<template>
      <el-container id="app">
          <el-header class="header">
              <div id="nav">
                  <el-menu :default-active="activePage" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                      <el-menu-item index="dashboard">DashBoard</el-menu-item>
                      <el-menu-item index="hooker">Hooker</el-menu-item>
                      <el-menu-item index="datapage">DEBUG</el-menu-item>
                  </el-menu>
                  <div id="statusBar">
                      <p>Running.... AJAX request.............</p>
                  </div>
              </div>
          </el-header>
          <router-view/>
      </el-container>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    @Component({

    })
    export default class Home extends Vue {
        public activePage:string ="dashboard";
        handleSelect(key:string, keyPath:string) {
            this.$router.replace("/"+key);
        }
        mounted(){
        }
    }
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {

}
#statusBar{
    position:relative;
    top:-60px;
    float:right;
    background-color: greenyellow;
    border-left: 2px solid greenyellow;
    border-right: 2px solid greenyellow;
    z-index:99;
    padding:0 10px;
}
</style>
