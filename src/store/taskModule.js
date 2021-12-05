export const taskModule = {
    state() {
        return {
            lists: [],
            activeList: null
        }
    },
    getters: {
        filteredTasks(state) {
            return state.lists.filter(list => {
                if (state.activeList.id === list.id) {
                    return list.tasks
                }
            })
        }
    },
    mutations: {
        setTasks(state, task) {
            state.lists.forEach(el => {
                if (el.id === state.activeList.id) {
                    el.tasks.push(task)  
                }
        })
        },
        setLists(state, list) {
            state.lists.push(list);
        },
        setActiveList(state, list) {
            state.activeList = list
        },
        removeTask(state, task) {
            state.lists = state.lists.map(list => {
                if (list.id === state.activeList.id) {
                    return {...list, tasks: list.tasks.filter(el => el.id !== task.id)}
                }
                return list
            }
            )
        }
    }
}