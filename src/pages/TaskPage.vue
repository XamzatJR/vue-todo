<template>
  <main class="main">
    <tasks :list="activeList" />
  </main>
</template>

<script>
import { mapState } from 'vuex';
import Tasks from '@/components/Tasks.vue';
export default {
  components: {
    Tasks,
  },
  computed: {
    ...mapState({
      activeList: (state) => state.task.activeList,
    }),
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  padding-left: 3rem;
}
</style>
