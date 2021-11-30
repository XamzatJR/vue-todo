<template>
    <div class="add-list">
        <img @click="this.$emit('show', false)" 
        class="close" 
        :src="close" 
        alt="close button" />

        <my-input v-model:listName="listName" 
        class="add-list__input" 
        placeholder="Название папки" />

        <div class="colors">
            <div 
                @click="this.active = color.id"
                :class="[active === color.id ? 'color__active' : null]"
                class="color" 
                v-for="color in $store.state.task.colors" 
                :key="color.id" 
                :style="{background: color.color}"
            >
            </div>
            
        </div>
        <my-btn class="btn__long">Добавить</my-btn>
    </div>
</template>

<script>
import close from '@/assets/close.svg'
    export default {
        data() {
            return {
                active: null,
                listName: ''
            }
        },
        methods: {
            createTask() {
                
            }
        },
        setup() {
            return {
                close
            }
        }
    }
</script>

<style lang="scss" scoped>
.colors {
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: 13px 0;
}
.color {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    cursor: pointer;
    &__active {
        border: 2px solid #525252;
    }
}
.add-list {
    position: absolute;
    left: 28px;
    width: 235px;
    height: 148px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__input {
        margin-top: 18px;
        width: 200px;
        height: 32px;
    }
}
.close {
    cursor: pointer;
    position: absolute;
    top: -6px;
    right: -6px;
}
</style>