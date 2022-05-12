<template>
  <div class="add-list">
    <img @click="closeModal" class="close" :src="close" alt="close modal button" />
    <my-input
      v-model="listName"
      @keydown.enter="createList"
      @keydown.esc="closeModal"
      class="input__short input"
      placeholder="Название списка"
    />
    <div class="colors">
      <div
        @click="this.active = color"
        :class="[active?.id === color.id ? 'color__active' : null]"
        class="color"
        v-for="color in colors"
        :key="color.id"
        :style="{ background: color.color }"
      ></div>
    </div>
    <my-btn
      @click="createList"
      :class="[listName.length < 1 ? 'not-allowed' : null]"
      class="btn__long"
      >Добавить</my-btn
    >
  </div>
</template>

<script>
import close from '@/assets/close.svg';
import store from '@/store/index.js';
export default {
  data() {
    return {
      active: null,
      colors: [
        { id: 1, color: '#C9D1D3' },
        { id: 2, color: '#42B883' },
        { id: 3, color: '#64C4ED' },
        { id: 4, color: '#FFBBCC' },
        { id: 5, color: '#B6E6BD' },
        { id: 6, color: '#C355F5' },
        { id: 7, color: '#09011A' },
        { id: 8, color: '#FF6464' },
      ],
      listName: '',
    };
  },
  methods: {
    createList() {
      if (this.listName) {
        store.commit('setLists', {
          ...this.active,
          name: this.listName,
          id: Date.now(),
          tasks: [],
        });
        this.$emit('show', false);
        this.listName = '';
      }
    },
    closeModal() {
      this.$emit('show', false);
      this.listName = '';
    },
  },
  setup() {
    return {
      close,
    };
  },
  mounted() {
    this.active = this.colors[0];
  },
};
</script>

<style lang="scss" scoped>
.colors {
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 13px 0;
}
.color {
  width: 20px;
  height: 20px;
  border-radius: 15px;
  cursor: pointer;
  &__active {
    border: 2px solid #525252;
  }
}
.add-list {
  position: absolute;
  left: 28px;
  width: 235px;
  height: 148px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.close {
  cursor: pointer;
  position: absolute;
  top: -6px;
  right: -6px;
}
button.not-allowed {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
