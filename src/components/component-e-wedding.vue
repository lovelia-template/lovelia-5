<script setup lang="ts">
  import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="container relative min-h-screen py-[72px]">
    <!-- Countdown -->
    <div class="pb-[72px] md:mb-0">
      <div class="relative flex flex-col items-center">
        <div class="text-center">
          <h2 class="heading__subtitle text-primary-3">Save the Date</h2>
          <h1 class="heading__title mt-3 text-primary-4 md:tracking-[.25rem]">
            Acara Akan Dilaksanakan
          </h1>
        </div>
        <div class="mt-5 flex">
          <div class="px-2 text-center md:px-4">
            <h1 class="wedding__main text-primary-4">17</h1>
            <h1 class="wedding__sub mt-5 text-primary-3">Hari</h1>
          </div>
          <h1 class="px-2 text-2xl text-primary-4 md:px-3 md:text-5xl">:</h1>
          <div class="px-2 text-center tracking-[.25rem] md:px-4">
            <h1 class="wedding__main text-primary-4">11</h1>
            <h1 class="wedding__sub mt-5 text-primary-3">Jam</h1>
          </div>
          <h1 class="px-2 text-2xl text-primary-4 md:px-3 md:text-5xl">:</h1>
          <div class="px-2 text-center tracking-[.25rem] md:px-4">
            <h1 class="wedding__main text-primary-4">42</h1>
            <h1 class="wedding__sub mt-5 text-primary-3">Menit</h1>
          </div>
          <h1 class="px-2 text-2xl text-primary-4 md:px-3 md:text-5xl">:</h1>
          <div class="px-2 text-center tracking-[.25rem] md:px-4">
            <h1 class="wedding__main text-primary-4">32</h1>
            <h1 class="wedding__sub mt-5 text-primary-3">Detik</h1>
          </div>
        </div>
      </div>
    </div>

    <!-- Detail Akad -->
    <div class="flex w-full flex-col gap-4 md:flex-row md:pt-40">
      <div class="flex w-full justify-center py-[72px] md:w-1/2">
        <div class="w-[322px]">
          <h1 class="heading__title pb-10 text-center text-primary-4">
            Detail Acara
            <span class="block">Akad Nikah</span>
          </h1>
          <div class="border-t border-primary-4 border-opacity-50">
            <div class="flex gap-[88px] pt-10">
              <div class="w-1/2">
                <h2 class="heading__subtitle text-primary-4">Tanggal</h2>
                <p class="content__sub mt-3 text-primary-3">
                  1 Februari
                  <span class="block">2024</span>
                </p>
              </div>
              <div class="w-full md:w-1/2">
                <h2 class="heading__subtitle text-primary-4">Waktu</h2>
                <p class="content__sub mt-3 text-primary-3">
                  18:00 WIB -
                  <span class="inline md:block">20:00 WIB</span>
                </p>
              </div>
            </div>
            <div class="mt-5">
              <h3 class="heading__subtitle text-primary-4">Lokasi</h3>
              <p class="content__sub mt-3 text-primary-3">
                Jl. Manyar Ambengan 27 - 8 Surabaya (Rumah Pengantin)
              </p>
            </div>
          </div>
          <button
            class="btn mt-10 flex items-start gap-3 border-primary-4 bg-primary-4 px-28 py-3 text-primary-2"
          >
            <p class="content__sub w-max">Lihat Lokasi</p>
            <icon
              icon="mdi:paper-airplane-variant"
              class="-rotate-45 text-xs"
            ></icon>
          </button>
        </div>
      </div>
      <!-- Detail Resepsi -->
      <div class="flex w-full justify-center pt-[72px] md:mt-0 md:w-1/2">
        <div class="w-[322px]">
          <h1 class="heading__title pb-10 text-center text-primary-4">
            Detail Acara
            <span class="block">Resepsi Nikah</span>
          </h1>
          <div class="border-t border-primary-4 border-opacity-50">
            <div class="flex gap-[88px] pt-10">
              <div class="w-1/2">
                <h2 class="heading__subtitle text-primary-4">Tanggal</h2>
                <p class="content__sub mt-3 text-primary-3">
                  1 Februari
                  <span class="block">2024</span>
                </p>
              </div>
              <div class="w-full md:w-1/2">
                <h2 class="heading__subtitle text-primary-4">Waktu</h2>
                <p class="content__sub mt-3 text-primary-3">
                  18:00 WIB -
                  <span class="inline md:block">20:00 WIB</span>
                </p>
              </div>
            </div>
            <div class="mt-5">
              <h2 class="heading__subtitle text-primary-4">Lokasi</h2>
              <p class="content__sub mt-3 text-primary-3">
                Jl. Manyar Ambengan 27 - 8 Surabaya (Rumah Pengantin)
              </p>
            </div>
          </div>
          <button
            class="btn mt-10 flex items-start gap-3 border-primary-4 bg-primary-4 px-28 py-3 text-primary-2"
          >
            <p class="content__sub w-max">Lihat Lokasi</p>
            <icon
              icon="mdi:paper-airplane-variant"
              class="-rotate-45 text-xs"
            ></icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  .wedding__main {
    @apply text-2xl leading-8 md:text-5xl md:leading-[48px];
  }
  .wedding__sub {
    @apply text-xs leading-8 md:text-2xl md:leading-[48px];
  }
</style>
