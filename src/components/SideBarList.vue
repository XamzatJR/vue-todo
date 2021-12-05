<template>
        <div @click="$store.commit('setActiveList', null)" :class="activeList === null ? 'list__active' : null" 
        v-if="lists.length >= 1" class="list">
            <img :src="entypo" alt="list svg">
            <div class="list-name">Все задачи</div>
        </div>
    <div class="list" 
    :class="[activeList?.id === list.id ? 'list__active' : null]" 
    v-for="list in lists"
    :key="list.id">
        <div class="list-color" :style="{background: list.color}"></div>
        <div @click="$store.commit('setActiveList', list)" class="list-name">
            {{list.name.length >=15 ? list.name.slice(0,14) + '...' : list.name}}
        </div>  
    </div>
</template>

<script>
import {mapState} from 'vuex';
import entypo from '@/assets/entypo-list.svg';

    export default {
        methods: {

        },
        computed: {
            ...mapState({
                lists: state => state.task.lists,
                activeList: state => state.task.activeList
            })
        },
        setup() {
            return {
                entypo,
            }
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
    margin-left: 20px;
    &:first-child {
        margin: 57px 0 28px 18px;
        cursor: pointer;
        & img {
            width: 18px;
            height: 18px;
            margin-right: 6px;
            margin-left: 10px;
        }
        &-name {
            font-weight: normal;
        }
    }
    &-name {
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.15px;
        color: #000;
        cursor: pointer;
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