<template>
        <main class="main">
            <h1 v-if="lists.length < 1" class="zero-tasks">
                Задачи отсутствуют
            </h1>
            <template v-else-if="activeList === null && lists.length >= 1">
                <template :key="list.id" v-for="list in lists">
                    <list :list="list"></list>
                </template>
            </template>
        </main>
</template>

<script>
import {mapState} from 'vuex'
import List from '@/components/List.vue';

export default {
    components: {
        List
    },
    computed: {
        ...mapState({
            activeList: state => state.task.activeList,
            lists: state => state.task.lists
        })
    },
};
</script>

<style lang="scss">
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

</style>
