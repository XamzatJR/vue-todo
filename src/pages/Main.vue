<template>
    <div class="container">
        <sidebar-l></sidebar-l>
        <main class="main">
            <h1 v-if="activeList === null && tasks.length < 1" 
            class="zero-tasks">
            Задачи отсутствуют
            </h1>
            <div v-else-if="activeList !== null" class="main__list">
                <h1 class="main__list-name" :style="{color: activeList.color}">
                    {{activeList.name}}
                </h1>
                <img :src="edit" alt="edit icon">
            </div>
            <task></task>
            <add-task v-if="!show && activeList !== null" @show="hideTask"></add-task>
            <div @click="this.show = false" v-if="show && activeList !== null" class="new_task">
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
import edit from '@/assets/edite.svg';
import Task from '../components/Task.vue';

export default {
    data() {
        return {
            show: true
        }
    },
    methods: {
        hideTask(bool) {
            this.show = bool
        }
    },
    components: {
        SidebarL,
        AddTask,
        Task
    },
    computed: {
        ...mapState({
            activeList: state => state.task.activeList,
            tasks: state => state.task.tasks
        })
    },
    setup() {
            return {
                add,
                edit
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
    &__list {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #F2F2F2;
        padding-bottom: 20px;
        margin-bottom: 31px;
        &-name {
            font-weight: bold;
            font-size: 32px;
            margin-right: 14px;
        }
        img {
            width: 15px;
            height: 15px;
            cursor: pointer;
        }
    }
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
    margin-top: 20px;
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
