<template>
    <div class="list" v-for="list in $store.state.task.lists" :key="list.id">
        <div class="list-color" :style="{background: list.color}"></div>
        <div class="list-name">list.name</div>
    </div>
</template>

<script>
    export default {
        props: {

        }
    }
</script>

<style lang="scss" scoped>
.list {
    width: 160px;
    height: 37px;
    background: inherit;
    display: flex;
    &-name {
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.15px;
        color: #000;
    }
    &-color {
        width: 10px;
        height: 10px;
    }
    &__active {
        background: #fff;
    }
}
</style>