<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-btn'
    }
</script>

<style lang="scss" scoped>
.btn {
    min-width: 90px;
    min-height: 34px;
    background: #F4F6F8;
    border-radius: 4px;
    cursor: pointer;
    &__add {
        background: #4DD599;
    }
}
</style>