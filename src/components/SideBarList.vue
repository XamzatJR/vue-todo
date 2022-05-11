<template>
  <ul class="list">
    <li
      @click="$store.commit('setActiveList', null), $router.push(`/`)"
      :class="activeList === null ? 'list__item_active' : null"
      v-if="lists.length >= 1"
      class="list__item"
    >
      <img :src="entypo" alt="list svg" />
      <div class="list__item-name">Все задачи</div>
    </li>
    <li
      class="list__item"
      :class="[activeList?.id === list.id ? 'list__item_active' : null]"
      v-for="list in lists"
      :key="list.id"
      @click="$router.push(`/list/${list.name}`)"
    >
      <div class="list__item-color" :style="{ background: list.color }"></div>
      <div @click="$store.commit('setActiveList', list)" class="list__item-name">
        {{ list.name.length >= 15 ? list.name.slice(0, 14) + '...' : list.name }}
      </div>
      <img
        class="list__item-img"
        @click="$store.commit('removeList', list)"
        :src="deleteSvg"
        alt="delete list item button"
      />
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import entypo from '@/assets/entypo-list.svg';
import deleteSvg from '@/assets/delete.svg';
export default {
  name: 'sidebar-list',
  computed: {
    ...mapState({
      lists: (state) => state.task.lists,
      activeList: (state) => state.task.activeList,
    }),
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
  &:hover &__img {
    opacity: 1;
  }
  &__item {
    &-name {
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.15px;
      color: #000;
      cursor: pointer;
    }
    &-color {
      min-width: 10px;
      min-height: 10px;
      border-radius: 15px;
    }
    &-img {
      width: 10px;
      height: 10px;
      cursor: pointer;
      opacity: 0;
    }
    &_active {
      background: #fff;
    }
  }
}
</style>
