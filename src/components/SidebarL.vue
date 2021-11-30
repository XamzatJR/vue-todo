<template>
    <sidebar class="sidebar">
        <div v-if="lists.length >= 1" class="all-tasks">
            <img :src="entypo" alt="list svg">
            <div class="list-item">Все задачи</div>
        </div>
        <list></list>
        <div @click="showAddList" class="add">
            <img :src="add" alt="add svg">
            <div class="add-text">Добавить папку</div>
        </div>
        <add-list v-show="show" @show="hideList"></add-list>
    </sidebar>
</template>

<script>
import {mapState} from 'vuex'
import AddList from '@/components/AddList.vue'
import entypo from '@/assets/entypo-list.svg';
import add from '@/assets/add.svg';
import List from '@/components/List.vue';
    export default {
        data() {
            return {
                show: false
            }
        },
        methods: {
            showAddList() {
                this.show = true
            },
            hideList(bool) {
                this.show = bool
            }
        },
        computed: {
            ...mapState({
                lists: state => state.task.lists
            })
        },
        components: {
            AddList,
            List
        },
        setup() {
            return {
                entypo,
                add
            }
        },
    }
</script>

<style lang="scss" scoped>
.sidebar {
    background: #f4f6f8;
    height: 100%;
    position: relative;
    & .all-tasks {
        display: flex;
        margin: 57px 0 28px 28px;
        cursor: pointer;
        & img {
            width: 18px;
            height: 18px;
            margin-right: 6px;
        }
    }
    & .list-item {
        font-weight: normal;
        font-size: 14px;
    }
}
.add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 37px;
    margin: 28px 0 0 20px;
    cursor: pointer;
    & img {
        width: 13px;
        height: 13px;
        margin-right: 10px;
    }
    &-text {
        color: #767676;
        font-weight: 600;
        font-size: 14px;
    }
}
</style>