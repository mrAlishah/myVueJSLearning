<script setup>
import TodoItem from '@/components/TodoItem.vue'
import Wrapper from '@/components/Wrapper.vue'

const todos = [
  {
    id: 1,
    title: 'a',
    done: true,
  },
  {
    id: 2,
    title: 'b',
    done: true,
  },
]
</script>

<template>
  <div>
    <div class="header">
      <div>
        <h3>Todo</h3>
      </div>
      <button>Show Todo</button>
    </div>

    <div v-for="todo in todos" :key="todo.id">
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
