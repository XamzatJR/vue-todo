<template>
    <div class="add_task">
        <my-input class="input__long" placeholder="Текст задачи" />
        <div class="add_task_btns">
        <my-btn class="btn__mid">Добавить задачу</my-btn>
        <my-btn>Отмена</my-btn>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
.add_task {
    margin-top: 20px;
    &_btns {
        display: flex;
        margin-top: 16px;
        & .btn__mid {
            margin-right: 9px;
        }
    }
}
</style>