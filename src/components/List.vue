<template>
    <div class="list" v-for="list in lists" :key="list.id">
        <div class="list-color" :style="{background: list.color}"></div>
        <div class="list-name">{{list.name}}</div>  
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState({
                lists: state => state.task.lists
            })
        }
    }
</script>

<style lang="scss" scoped>
.list {
    width: 160px;
    height: 37px;
    background: inherit;
    display: flex;
    align-items: center;
    margin: 0 20px;
    &-name {
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.15px;
        color: #000;
    }
    &-color {
        width: 10px;
        height: 10px;
        border-radius: 15px;
        margin: 0 10px 0 12px;
    }
    &__active {
        background: #fff;
    }
}
</style>