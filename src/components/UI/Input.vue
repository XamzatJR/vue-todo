<template>
    <input :value="listName" @input="updateInput" class="input" />
</template>

<script>
    export default {
        name: 'my-input',
        props: {
            listName: String
        },
        methods: {
            updateInput(event) {
                this.$emit('update:listName', event.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
.input {
    background: #FFFFFF;
    padding-left: 11px;
    border: 1px solid #EFEFEF;
    border-radius: 4px;
    outline: none;
    font-weight: 600;
    font-size: 14px;
    &::-webkit-input-placeholder {
        color: #C7C7C7;
    }
}
</style>