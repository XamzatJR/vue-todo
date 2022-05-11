<template>
  <div class="container">
    <sidebar></sidebar>
    <router-view> </router-view>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
export default {
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@400;500;600;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
}
.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5.5fr;
}
</style>
