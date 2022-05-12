<template>
  <main class="main">
    <h1 v-if="lists.length < 1" class="zero-tasks">Задачи отсутствуют</h1>
    <template v-else-if="activeList === null && lists.length >= 1">
      <template :key="list.id" v-for="list in lists">
        <tasks :list="list" />
      </template>
    </template>
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
      lists: (state) => state.task.lists,
    }),
  },
};
</script>

<style lang="scss">
.main {
  height: 100%;
  //   padding-left: 55px;
  padding-left: 3rem;
}
.zero-tasks {
  font-size: 3rem;
  color: #c9d1d3;
  font-family: Montserrat;
  font-weight: bold;
  margin-top: 47vh;
}
</style>
