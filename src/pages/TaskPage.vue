<template>
  <tasks :list="activeList" :tasks="filteredByList" />
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
    ...mapState(useTaskStore, ['activeList', 'filteredByList']),
  },
};
</script>

<style lang="scss" scoped></style>
