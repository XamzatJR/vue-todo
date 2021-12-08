<template>
    <div class="add_task">
        <my-input @keydown.esc="this.$emit('show', true)" @keydown.enter="createTask" v-model="taskName" class="input__long input" placeholder="Текст задачи" />
        <div class="add_task_btns">
        <my-btn  @click="createTask" class="btn__mid" :class="[taskName.length > 0 ? null : 'not-allowed']">Добавить задачу</my-btn>
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
                if (this.taskName) {
                    store.commit('setTasks', {id: Date.now(), title: this.taskName,listId: this.activeList.id, completed: false});
                    this.$emit('show', true);
                    this.taskName = '';
                }
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
        & .not-allowed {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
}
</style>