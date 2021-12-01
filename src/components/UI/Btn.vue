<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-btn',
    }
</script>

<style lang="scss" scoped>
.btn {
    min-width: 90px;
    min-height: 34px;
    font-weight: 600;
    font-size: 14px;
    background: #F4F6F8;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    color: #9C9C9C;
    letter-spacing: 0.15px;
    &__long, &__mid {
        background: #4DD599;
        color: #fff;
    }
    &__long {
        width: 200px;
    }
    &__mid {
        width: 145px;
    }
}
</style>