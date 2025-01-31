<template>
    <div>
        <div>
          {{ todo.title}}
        </div>
    </div>  
</template>

<script setup>
 
 defineProps({
    todo:{
      type:Object,
      required:true  
    }
 })
</script>

<style lang="scss" scoped>
</style>