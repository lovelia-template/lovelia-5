<script setup lang="ts">
  import { Icon } from '@iconify/vue'
</script>

<template>
  <main>
    <div
      class="relative bottom-0 flex w-full flex-col items-center justify-center border-t border-primary-4 border-opacity-50 pt-5 text-center md:pt-10"
    >
      <h1 class="content__sub text-primary-1">
        &copy; Lovelia. All right reserved.
      </h1>
      <div class="mb-5 mt-3 flex gap-4 md:mb-10 md:mt-5">
        <icon
          icon="ri:facebook-fill"
          class="rounded-full bg-primary-1 text-xs text-primary-2"
        ></icon>
        <icon
          icon="mdi:instagram"
          class="rounded-full bg-primary-1 p-[1px] text-xs text-primary-2"
        ></icon>
        <icon
          icon="mdi:twitter"
          class="rounded-full bg-primary-1 p-[1px] text-xs text-primary-2"
        ></icon>
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped></style>
