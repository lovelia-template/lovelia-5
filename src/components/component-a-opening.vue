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
        class="container relative z-10 flex h-full flex-col items-center justify-center"
      >
        <div class="mt-[334px] space-y-5 text-center text-primary-5">
          <h3 class="opening__subtitle">Wedding Invitations</h3>
          <h2 class="content__main">William & Jessica</h2>
          <h3 class="opening__subtitle">Sabtu, 14 April 2024</h3>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
  .opening__subtitle {
    @apply text-[10px] leading-4 md:text-base md:leading-8;
  }
</style>
