<template>
  <div>
    <PageHeader title="Category Index" />
    <section class="py-10 container">
      <div class="flex flex-wrap gap-5">
        <nuxt-link
          v-for="i in 33"
          :key="i"
          to="/categories/123"
          class="block py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
          >#CategoryName {{ i }}</nuxt-link
        >
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
