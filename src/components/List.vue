<template>
    <div>
        <div  class="main__list">
            <h1 class="main__list-name" :style="{color: activeList.color}">
                {{activeList.name}}
            </h1>
            <img :src="edit" alt="edit icon">
        </div>
        <task></task>
        <add-task v-if="!show && activeList !== null" @show="hideTask"></add-task>
        <div @click="this.show = false" 
            v-if="show && activeList !== null" class="new_task">
                <img :src="add" alt="add new task">
                <div class="new_task__name">Новая задача</div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import add from '@/assets/add.svg';
import edit from '@/assets/edite.svg';
import AddTask from '@/components/AddTask.vue';
import Task from '@/components/Task.vue';

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
    computed: {
        ...mapState({
            activeList: state => state.task.activeList,
            lists: state => state.task.lists
        })
    },
    components: {
        AddTask,
        Task
    },
    setup() {
        return {
            add,
            edit
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
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
.new_task {
    height: 19px;
    display: flex;
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
        margin-right: 19px;
        margin-left: 3px;
    }
}
</style>