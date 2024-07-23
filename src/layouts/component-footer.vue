<script setup lang="ts">
  import { Icon } from '@iconify/vue'
</script>

<template>
  <main>
    <div
      class="relative bottom-0 flex w-full flex-col items-center justify-center bg-primary-1 pt-5 text-center md:pt-10"
    >
      <h1 class="footer__paragraph">&copy; Lovelia. All right reserved.</h1>
      <div class="mb-5 mt-3 flex gap-4 md:mb-10 md:mt-5">
        <icon
          icon="ri:facebook-fill"
          class="rounded-full bg-primary-2 text-xs text-primary-1"
        ></icon>
        <icon
          icon="mdi:instagram"
          class="rounded-full bg-primary-2 p-[1px] text-xs text-primary-1"
        ></icon>
        <icon
          icon="mdi:twitter"
          class="rounded-full bg-primary-2 p-[1px] text-xs text-primary-1"
        ></icon>
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
  .footer__paragraph {
    @apply text-2xl leading-[29.26px] text-primary-2;
  }
</style>
