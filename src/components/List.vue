<template>
  <div>
    <div class="main__list">
      <h1 class="main__list-name" :style="{ color: list?.color }">
        {{ list?.name }}
      </h1>
      <img @click="editTitle" :src="edit" alt="edit icon" />
    </div>
    <template v-if="activeList === list">
      <task :tasks="filteredTasks[0]?.tasks"></task>
    </template>
    <template v-else>
      <task :tasks="list?.tasks"></task>
    </template>
    <add-task v-if="!show && activeList !== null" @show="hideTask"></add-task>
    <div @click="this.show = false" v-if="show && activeList !== null" class="new_task">
      <img :src="add" alt="add new task" />
      <div class="new_task__name">Новая задача</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import add from '@/assets/add.svg';
import edit from '@/assets/edite.svg';
import AddTask from '@/components/AddTask.vue';
import Task from '@/components/Task.vue';

export default {
  data() {
    return {
      show: true,
    };
  },
  props: {
    list: {
      required: true,
    },
  },
  methods: {
    hideTask(bool) {
      this.show = bool;
    },
    editTitle() {
      const newTitle = window.prompt('Новое название листа', this.list.name);
      if (newTitle) this.list.name = newTitle;
      localStorage.setItem('lists', JSON.stringify(this.lists));
    },
  },
  computed: {
    ...mapState({
      activeList: (state) => state.task.activeList,
      lists: (state) => state.task.lists,
    }),
    ...mapGetters({
      filteredTasks: 'filteredTasks',
    }),
  },
  components: {
    AddTask,
    Task,
  },
  setup() {
    return {
      add,
      edit,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  &__list {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 20px;
    margin-bottom: 31px;
    &-name {
      font-weight: bold;
      font-size: 32px;
      margin-right: 14px;
    }
    &:hover img {
      opacity: 1;
    }
    img {
      opacity: 0;
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
  }
}
.new_task {
  height: 19px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
  &__name {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.15px;
    color: #b4b4b4;
  }
  img {
    width: 14px;
    height: 14px;
    margin-right: 19px;
    margin-left: 3px;
  }
}
</style>
