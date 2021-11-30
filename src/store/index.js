const { createStore } = require("vuex");
const { taskModule } = require("./taskModule");

const store = createStore({
    modules: {
        task: taskModule
    }
})
export default store