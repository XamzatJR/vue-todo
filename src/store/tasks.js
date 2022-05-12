import { defineStore } from 'pinia';
export const useTasksStore = defineStore('tasks', {
  state: () => ({
    lists: JSON.parse(localStorage.getItem('lists')) || [],
    tasks: [],
    activeList: null,
    filter: 'all', // all, completed, uncompleted
    sortBy: 'time', // time, priority, name, list
    nextID: 0,
  }),
  getters: {
    completedTasks(state) {
      return state.tasks.filter((el) => el.completed);
    },
    uncompletedTasks(state) {
      return state.tasks.filter((el) => !el.completed);
    },
    filteredByList(state) {
      return state.tasks.filter((task) => state.activeList?.id === task.listID);
    },
    filteredTasks(state) {
      switch (state.filter) {
        case 'list':
          return this.filteredByList;
        case 'completed':
          return this.completedTasks;
        case 'uncompleted':
          return this.uncompletedTasks;
      }
      return state.tasks;
    },
  },
  actions: {
    addTask({ text, priority, listID }) {
      this.tasks.push({
        text,
        id: this.nextID++,
        completed: false,
        time: Date.now(),
        priority: priority || 0,
        listId: listID || this.activeList.id,
      });
    },
    addList(name) {
      this.lists.push({ id: Date.now(), name });
    },
    setActiveList(list) {
      this.activeList = list;
    },
    removeList(listID) {
      this.lists = this.lists.filter((list) => list.id !== listID);
    },
    setCompleted(taskID) {
      this.tasks = this.tasks.map((el) => (el.id === taskID ? (el.completed = true) : el));
    },
    removeTask(taskID) {
      this.tasks = this.tasks.filter((list) => list.id !== taskID);
    },
  },
});
