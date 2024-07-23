<script setup lang="ts"></script>

<template>
  <main>
    <div class="relative h-screen">
      <img
        src="/images/image-a-opening.png"
        alt=""
        class="absolute h-full w-full object-cover"
      />
      <div
        class="container relative z-10 hidden h-full flex-col items-center justify-center md:flex"
      >
        <div class="mt-[500px] space-y-3 text-center">
          <h3 class="opening__paragraph">Wedding Invitations</h3>
          <h2 class="opening__title">William & Jessica</h2>
          <h3 class="opening__paragraph">Sabtu, 14 April 2024</h3>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
  .opening__title {
    @apply font-gotu text-2xl leading-9 text-primary-2;
  }
  .opening__paragraph {
    @apply font-merriweather text-base leading-8 text-primary-2;
  }
</style>
