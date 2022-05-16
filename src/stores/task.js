import { defineStore } from 'pinia';
export const useTaskStore = defineStore('tasks', {
  state: () => ({
    lists: [],
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
      return state.tasks.filter((task) => task.listId === state?.activeList?.id);
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
    addTask(text, priority, listId) {
      this.tasks.push({
        text,
        id: this.nextID++,
        completed: false,
        time: Date.now(),
        priority: priority || 0,
        listId: listId || this.activeList.id,
      });
    },
    addList(name, color) {
      const list = { id: Date.now(), name, color };
      this.lists.push(list);
      this.activeList = list;
    },
    setActiveList(list) {
      this.activeList = list;
    },
    removeList(listId) {
      this.lists = this.lists.filter((list) => list.id !== listId);
    },
    setCompleted(taskId) {
      this.tasks = this.tasks.map((el) =>
        el.id === taskId ? { ...el, completed: !el.completed } : el
      );
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter((list) => list.id !== taskId);
    },
  },
});
