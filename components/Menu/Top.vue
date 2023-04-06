<template>
  <nav class="bg-gray-900 text-white py-5">
    <div class="container flex justify-between">
      <nuxt-link to="/" class="logo text-xl font-bold">HaoN Blog</nuxt-link>
      <ul class="inline-flex gap-2">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/categories">Categories</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style scoped></style>
