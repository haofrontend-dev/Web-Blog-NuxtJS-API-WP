<template>
  <div>
    <h1>Example of dynamic route {{ route.params.slug }}</h1>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>

<style scoped></style>
