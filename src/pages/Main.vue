<template>
  <h1 v-if="tasks.length < 1" class="zero-tasks">Задачи отсутствуют</h1>
  <tasks v-else :list="activeList" :tasks="filteredTasks" />
</template>

<script>
import { mapState } from 'pinia';
import Tasks from '@/components/Tasks.vue';
import { useTaskStore } from '../stores/task';

export default {
  components: {
    Tasks,
  },
  computed: {
    ...mapState(useTaskStore, ['activeList', 'tasks', 'filteredTasks']),
  },
};
</script>

<style lang="scss">
.zero-tasks {
  font-size: 3rem;
  color: #c9d1d3;
  font-family: Montserrat;
  font-weight: bold;
  margin-top: 47vh;
  text-align: center;
}
</style>
