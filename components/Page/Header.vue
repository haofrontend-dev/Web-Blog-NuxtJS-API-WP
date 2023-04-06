<template>
  <section class="hero bg-gray-100 py-10">
    <div class="container flex items-center">
      <h1 v-if="title" class="text-4xl font-bold">{{ title }}</h1>
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>

<style scoped></style>
