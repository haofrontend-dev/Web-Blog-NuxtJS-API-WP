<template>
  <main>
    <section class="header container py-24">
      <!-- Post Title  -->
      <div class="post-title">
        <h1 class="text-5xl font-bold leading-normal text-center mb-45">
          {{ post.title.rendered }}
        </h1>
      </div>
      <!-- Post Meta  -->
      <div class="post-meta text-center mb-8">
        <span class="mr-3"
          >Writer by {{ post._embedded["author"][0].name }}</span
        >
        <span>Publishedon by {{ post.date }}</span>
      </div>
      <!-- Post Image  -->
      <div
        class="w-full h-[250px] sm:h-[450px] relative shadow-xl rounded overflow-hidden mb-10"
      >
        <img
          :src="post._embedded['wp:featuredmedia'][0]?.source_url"
          alt=""
          class="absolute w-full h-full object-cover"
        />
      </div>
      <!-- Post Content  -->
      <div class="post-content">
        <div v-html="post.content.rendered"></div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
const { params } = useRoute();
const { data: posts } = await useWpApi().getPost<any>(params.slug as string);
const post = posts.value[0];
</script>

<style scoped></style>
