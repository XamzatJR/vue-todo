<template>
  <ul class="list">
    <li @click="goAll" :class="activeList === null ? 'list__item_active' : null" class="list__item">
      <img class="list__item-color" :src="entypo" alt="list svg" />
      <div class="list__item-name">Все</div>
    </li>
    <li
      class="list__item"
      :class="[activeList?.id === list.id ? 'list__item_active' : null]"
      v-for="list in lists"
      :key="list.id"
      @click="setActiveListFn(list)"
    >
      <div class="list__item-color" :style="{ background: list.color }"></div>
      <div class="list__item-name">
        {{ list.name.length >= 15 ? list.name.slice(0, 14) + '...' : list.name }}
      </div>
      <img
        class="list__item-img"
        @click.stop="removeListFn(list)"
        :src="deleteSvg"
        alt="delete list item button"
      />
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useTaskStore } from '../stores/task';

import entypo from '@/assets/entypo-list.svg';
import deleteSvg from '@/assets/delete.svg';

export default {
  name: 'sidebar-list',
  computed: {
    ...mapState(useTaskStore, ['lists', 'activeList']),
  },
  methods: {
    ...mapActions(useTaskStore, ['removeList', 'setActiveList']),
    removeListFn(list) {
      if (this.activeList === list) {
        this.removeList(list);
        this.goAll();
      }
    },
    goAll() {
      this.setActiveList(null);
      this.$router.push({ name: 'Home' });
    },
    setActiveListFn(list) {
      this.$router.push(`/list/${list.name}`);
      this.setActiveList(list);
    },
  },
  setup() {
    return {
      entypo,
      deleteSvg,
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  background: inherit;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: center;
  width: 100%;
  &__item {
    display: flex;
    width: 80%;
    height: 2rem;
    align-items: center;
    padding: 0 4%;
    margin-bottom: 4%;
    cursor: pointer;
    &:not(.list__item_active):hover {
      opacity: 0.6;
    }
    &:first-of-type &-color {
      border-radius: 0;
      width: 18px;
      height: 18px;
    }
    &-name {
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0.15px;
      color: #000;
    }
    &-color {
      margin-right: 5%;
      width: 12px;
      height: 12px;
      border-radius: 1rem;
    }
    &-img {
      margin-left: auto;
      width: 14px;
      height: 14px;
      opacity: 0;
    }
    &_active {
      background: #fff;
      &:hover .list__item-img {
        opacity: 1;
      }
    }
  }
}
</style>
