<template>
  <div class="add_task">
    <my-input
      @keydown.esc="closeModal"
      @keydown.enter="createTask"
      v-model="taskName"
      class="input__long input"
      placeholder="Текст задачи"
    />
    <div class="add_task_btns">
      <my-btn
        @click="createTask"
        class="btn__mid"
        :class="[taskName.length > 0 ? null : 'not-allowed']"
        >Добавить задачу</my-btn
      >
      <my-btn @click="closeModal">Отмена</my-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useTaskStore } from '../stores/task';
export default {
  data() {
    return {
      taskName: '',
    };
  },
  props: {
    show: {
      type: Boolean,
    },
  },
  computed: {
    ...mapState(useTaskStore, ['activeList']),
  },
  methods: {
    ...mapActions(useTaskStore, ['addTask']),
    createTask() {
      if (this.taskName) {
        this.addTask(this.taskName, 0, this.activeList.id);
        this.$emit('show', true);
        this.taskName = '';
      }
    },
    closeModal() {
      this.$emit('show', true);
    },
  },
};
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
    & .not-allowed {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
}
</style>
