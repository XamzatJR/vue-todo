<template>
  <div class="container">
    <sidebar-l></sidebar-l>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import SidebarL from '@/components/SidebarL.vue';
export default {
  components: {
    SidebarL
  }
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
    margin: 150px auto;
    width: 746px;
    height: 529px;
    display: grid;
    grid-template-columns: 200px 546px;
}
</style>
