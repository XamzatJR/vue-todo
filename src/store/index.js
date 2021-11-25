const { createStore } = require("vuex");
const { taskModule } = require("./taskModule");

export default createStore({
    modules: {
        task: taskModule
    }
})