<template>
    <div class="container">
        <sidebar-l></sidebar-l>
        <main class="main">
            <h1 v-if="activeList === null && tasks.length < 1" 
            class="zero-tasks">
            Задачи отсутствуют
            </h1>
            <add-task v-if="!show"></add-task>
            <div @click="this.show = false" v-if="show" class="new_task">
                <img :src="add" alt="add new task">
                <div class="new_task__name">Новая задача</div>
            </div>
        </main>
    </div>
</template>

<script>
import SidebarL from '@/components/SidebarL.vue';
import {mapState} from 'vuex'
import AddTask from '../components/AddTask.vue';
import add from '@/assets/add.svg';

export default {
    data() {
        return {
            show: true
        }
    },
    components: {
        SidebarL,
        AddTask
    },
    computed: {
        ...mapState({
            activeList: state => state.task.activeList,
            tasks: state => state.task.tasks
        })
    },
    setup() {
            return {
                add
            }
    }
};
</script>

<style lang="scss">
.container {
    margin: 150px auto;
    width: 746px;
    height: 529px;
    display: grid;
    grid-template-columns: 200px 546px;
}
.main {
    height: 100%;
    padding-left: 55px;
}
.zero-tasks {
    font-size: 32px;
    color: #C9D1D3;
    font-family: Montserrat;
    font-weight: bold;
    margin: 234px 0 0 103px;
}
.new_task {
    width: 134px;
    height: 19px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &__name {
        font-weight: 500;
        font-size: 16px;
        letter-spacing: 0.15px;
        color: #B4B4B4;
    }
    img {
        width: 14px;
        height: 14px;
    }
}
</style>
