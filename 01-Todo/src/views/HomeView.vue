<script setup>
import TodoItem from '@/components/TodoItem.vue'
import Wrapper from '@/components/Wrapper.vue'
import { useTodoStore } from '@/stores/TodoStore'
import { ref } from 'vue'

const todoStore = useTodoStore()

const todoFilter = ref('all')
const setTodoFilter = () => {
  todoFilter.value = todoFilter.value === 'all' ? 'done' : 'all'
}
</script>

<template>
  <div>
    <div class="header">
      <div>
        <h3>{{ todoFilter === 'all' ? 'All todo' : 'Done todo' }}</h3>
      </div>
      <button @click="setTodoFilter">
        {{ todoFilter === 'all' ? 'Show done todo' : 'Show all todo' }}
      </button>
    </div>

    <div v-for="todo in todoStore.sorted" :key="todo.id">
      <Wrapper>
        <TodoItem :todo="todo" />
      </Wrapper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  button {
    color: #fff;
    background: #1e40af;
    padding: 4px 15px;
    border-radius: 5px;
    &:hover {
      background: #0ea5e9;
    }
  }
}
</style>
