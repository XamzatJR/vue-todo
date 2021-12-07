<template>
    <input autofocus :value="modelValue" @input="updateInput" type="text" />
</template>

<script>
    export default {
        name: 'my-input',
        props: {
            modelValue: String
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
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
    &__short {
        margin-top: 18px;
        width: 200px;
        height: 32px;
    }
    &__long {
        width: 415px;
        height: 38px;
    }
    
}
</style>