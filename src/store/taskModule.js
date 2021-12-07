export const taskModule = {
    state() {
        return {
            lists: JSON.parse(localStorage.getItem('lists')) || [],
            activeList: null
        }
    },
    getters: {
        filteredTasks(state) {
            return state.lists.filter(list => {
                if (state.activeList?.id === list.id) {
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
            localStorage.setItem('lists', JSON.stringify(state.lists))
        },
        setLists(state, list) {
            state.lists.push(list);
            localStorage.setItem('lists', JSON.stringify(state.lists))
        },
        setActiveList(state, list) {
            state.activeList = list;
        },
        removeList(state, list) {
            state.lists = state.lists.filter(el => el.id !== list.id);
            localStorage.setItem('lists', JSON.stringify(state.lists))
        },
        setCompleted(state, task) {
            state.lists = state.lists.map(list => {
                if (list.id === task.listId) {
                    return {...list, tasks: list.tasks.map(el => el.id === task.id ? {...task, completed: !task.completed} : el)}
                }
                return list
            })
            localStorage.setItem('lists', JSON.stringify(state.lists))
        },
        removeTask(state, task) {
            state.lists = state.lists.map(list => {
                if (list.id === task.listId) {
                    return {...list, tasks: list.tasks.filter(el => el.id !== task.id)}
                }
                return list
                }
            )
            localStorage.setItem('lists', JSON.stringify(state.lists))
        }
    }
}