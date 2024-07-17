<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { ref } from 'vue'

  const isActive = ref(true)
</script>

<template>
  <main>
    <div v-if="isActive" class="fixed z-50 h-screen w-full">
      <img
        src="/images/opening.png"
        alt=""
        class="absolute h-full w-full object-cover"
      />
      <div
        class="relative z-10 flex h-full flex-col items-center justify-center px-10 text-primary-2"
      >
        <div class="mt-10">
          <p class="text-4xl leading-[72px]">Halo</p>
        </div>
        <div class="mt-[72px] text-center">
          <p class="text-base">Kepada Yth. Bpk/Ibu</p>
          <p class="mt-3 text-base">Adinda Kumala</p>
        </div>
        <button
          class="btn mt-[72px] flex w-full items-center justify-center gap-3 border-primary-2 py-3 text-primary-2 md:w-fit md:px-28"
          @click="isActive = !isActive"
        >
          <p class="content__sub w-max">Buka Undangan</p>
          <icon
            icon="mdi:paper-airplane-variant"
            class="-rotate-45 text-xs"
          ></icon>
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped></style>
