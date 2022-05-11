<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-btn',
};
</script>

<style lang="scss" scoped>
.btn {
  min-width: 90px;
  min-height: 34px;
  font-weight: 600;
  font-size: 14px;
  background: #f4f6f8;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  color: #9c9c9c;
  letter-spacing: 0.15px;
  &__long,
  &__mid {
    background: #4dd599;
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
