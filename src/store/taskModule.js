export const taskModule = {
    state() {
        return {
            tasks: [],
            lists: [],
            colors: [{id: 1, color: '#C9D1D3'},
                    {id: 2, color: '#42B883'},
                    {id: 3, color: '#64C4ED'},
                    {id: 4, color: '#FFBBCC'},
                    {id: 5, color: '#B6E6BD'},
                    {id: 6, color: '#C355F5'},
                    {id: 7, color: '#09011A'},
                    {id: 8, color: '#FF6464'}]
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