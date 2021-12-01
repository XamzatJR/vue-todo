export const taskModule = {
    state() {
        return {
            tasks: [],
            lists: [],
            activeList: null
        }
    },
    getters: {

    },
    mutations: {
        setTasks(state, task) {
            state.tasks.push(task);
        },
        setLists(state, list) {
            state.lists.push(list);
        },
        setActiveList(state, list) {
            state.activeList = list
        }
    },
    actions: {

    }
}