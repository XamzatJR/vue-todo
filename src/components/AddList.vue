<template>
    <div class="add-list">
        <img @click="hideAddList" class="close" :src="close" alt="close button" />
        <my-input placeholder="Название папки" />
        <div>

        </div>
    </div>
</template>

<script>
import close from '@/assets/close.svg'
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hideAddList() {
                this.$emit('show', false)
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
.add-list {
    position: relative;
    width: 235px;
    height: 148px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    background: #fff;
}
.close {
    cursor: pointer;
    position: absolute;
    top: -6px;
    right: -6px;
}
</style>