<template>
    <main class="main">
        <list :list="activeList" ></list>
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
                activeList: state => state.task.activeList
            })
        }
    }
</script>

<style lang="scss" scoped>
.main {
    height: 100%;
    padding-left: 55px;
}
</style>