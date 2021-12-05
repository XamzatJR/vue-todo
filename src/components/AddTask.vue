<template>
    <div class="add_task">
        <my-input v-model="taskName" class="input__long input" placeholder="Текст задачи" />
        <div class="add_task_btns">
        <my-btn @click="createTask" class="btn__mid">Добавить задачу</my-btn>
        <my-btn @click="this.$emit('show', true)">Отмена</my-btn>
        </div>
    </div>
</template>

<script>
import store from '@/store/index.js'
import {mapState} from 'vuex'
    export default {
        data() {
            return {
                taskName: ''
            }
        },
        props: {
            show: {
                type: Boolean
            }
        },
        computed: {
            ...mapState({
                activeList: state => state.task.activeList
            })
        },
        methods: {
            createTask() {
                store.commit('setTasks', {id: Date.now(), title: this.taskName});
                this.$emit('show', true);
                this.taskName = '';
            }
        }
    }
</script>

<style lang="scss" scoped>
.add_task {
    margin-top: 20px;
    &_btns {
        display: flex;
        margin-top: 16px;
        & .btn__mid {
            margin-right: 9px;
        }
    }
}
</style>