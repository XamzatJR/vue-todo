<template>
    <div :key="task.id" v-for="task in tasks" class="task">
        <my-input @click="$store.commit('setCompleted', task)" 
        :id="task.id" type="checkbox" class="checkbox" :class="[task.completed ? 'checked' : null]" />
        <label :for="task.id" class="task-item">
            {{task.title}}            
        </label>
            <img :src="deleteSvg" @click="$store.commit('removeTask', task)" />
    </div>
</template>

<script>
import deleteSvg from "@/assets/delete.svg";

    export default {
        props: {
            tasks: {
                required: true
            }
        },
        setup() {
            return {
                deleteSvg
            };
        }
    }
</script>

<style lang="scss" scoped>
.task {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    &-item {
        font-weight: 500;
        font-size: 16px;
        cursor: pointer;
    }
    &:hover img {
        opacity: 1;
    }
    & img {
        cursor: pointer;
        width: 11px;
        height: 11px;
        margin-left: auto;
        opacity: 0;
    }
}
.checkbox {
            appearance: none;
            -webkit-appearance: none;
            border-radius: 2em;
            width: 20px;
            height: 20px;
            border: 2px solid #E8E8E8;
            margin-right: 15px;
            cursor: pointer;
            &:hover {
                background: #F2F2F2;
                border: 2px solid #F2F2F2;
                background-image: url('../assets/nike.svg');
                background-repeat: no-repeat;
                background-size: 13px;
                background-position: center;
            }
            &.checked {
                background-color: #4DD599;
                background-image: url('../assets/nike.svg');
                background-repeat: no-repeat;
                background-size: 13px;
                background-position: center;
                border: none;
                &+label {
                    text-decoration: line-through;
                }
            }
        }
</style>