<template>
  <HeaderStart />
  <div class="main">
  <TaskMenu />
  <router-view />
  </div>
</template>

<script>
import TaskMenu from '@/components/TaskMenu.vue'
import HeaderStart from '@/components/HeaderStart.vue'

export default {
  name: 'App',
  components: {
    TaskMenu,
    HeaderStart,
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  display: flex;
}
</style>
