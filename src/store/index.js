const { createStore } = require("vuex");
const { taskModule } = require("./taskModule");

export const store = createStore({
    modules: {
        task: taskModule
    }
})