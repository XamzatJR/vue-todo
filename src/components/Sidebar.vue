<template>
  <aside class="sidebar">
    <sidebar-list></sidebar-list>
    <div @click="showAddList" class="add">
      <img :src="add" alt="add svg" />
      <div class="add-text">Добавить папку</div>
    </div>
    <add-list v-show="show" @show="hideList"></add-list>
  </aside>
</template>

<script>
import { mapState } from 'vuex';
import AddList from '@/components/AddList.vue';
import add from '@/assets/add.svg';
import SidebarList from '@/components/SidebarList.vue';
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showAddList() {
      this.show = true;
    },
    hideList(bool) {
      this.show = bool;
    },
  },
  computed: {
    ...mapState({
      lists: (state) => state.task.lists,
    }),
  },
  components: {
    AddList,
    SidebarList,
  },
  setup() {
    return {
      add,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background: #f4f6f8;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.add {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 37px;
  cursor: pointer;
  & img {
    width: 13px;
    height: 13px;
  }
  &-text {
    color: #767676;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
