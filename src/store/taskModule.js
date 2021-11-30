export const taskModule = {
    state() {
        return {
            tasks: [],
            lists: [],
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
        }
    },
    actions: {

    }
}