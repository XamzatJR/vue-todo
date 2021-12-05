<template>
    <div class="container">
        <sidebar-l></sidebar-l>
        <main class="main">
            <h1 v-if="lists.length < 1" class="zero-tasks">
                Задачи отсутствуют
            </h1>

            <template v-else-if="activeList !== null">
                <list></list>
            </template>

            <template v-else-if="activeList === null && lists.length > 1">
                <template :key="list.id" v-for="list in lists">
                    <list></list>
                </template>
            </template>
        </main>
    </div>
</template>

<script>
import SidebarL from '@/components/SidebarL.vue';
import {mapState} from 'vuex'
import List from '@/components/List.vue';

export default {
    components: {
        SidebarL,
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
}
.zero-tasks {
    font-size: 32px;
    color: #C9D1D3;
    font-family: Montserrat;
    font-weight: bold;
    margin: 234px 0 0 103px;
}

</style>
