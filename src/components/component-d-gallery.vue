<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { Navigation, Pagination, Scrollbar } from 'swiper'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import 'swiper/css/scrollbar'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { computed } from 'vue'

  const modules = [Navigation, Pagination, Scrollbar]
  const isSmallScreen = computed(() => window.innerWidth < 768)
</script>

<template>
  <div class="relative min-h-screen py-[72px] md:container">
    <div class="relative flex w-full flex-col md:flex-row">
      <div
        class="flex h-full w-full flex-col justify-center text-center md:h-[326px] md:w-1/2 md:text-left"
      >
        <div class="relative pt-0 md:pt-28">
          <h1 class="heading__title">
            Galeri
            <span class="block">Foto Mempelai</span>
          </h1>
        </div>
        <div v-if="!isSmallScreen" class="flex h-1/2 flex-col justify-end">
          <div class="relative mt-10 w-[128px]">
            <div class="swiper-button-prev after:hidden">
              <icon
                icon="heroicons:arrow-long-left-solid"
                class="absolute text-3xl text-primary-1"
              ></icon>
            </div>
            <div class="swiper-button-next ml-10 after:hidden">
              <icon
                icon="heroicons:arrow-long-right-solid"
                class="absolute text-3xl text-primary-1"
              ></icon>
            </div>
          </div>
          <div class="relative mt-10 flex h-full w-full items-center gap-4">
            <div
              class="swiper-horizontal !relative flex w-[235px] items-center py-4"
            >
              <div
                class="swiper-scrollbar !relative mt-1 max-h-[3px] max-w-[235px]"
              >
                <div class="swiper-scrollbar-drag !bg-primary-1"></div>
              </div>
            </div>
            <div class="!relative h-full w-16">
              <span
                class="swiper-pagination absolute right-0 cursor-default font-bold text-primary-1"
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 w-full md:mt-0 md:w-[410px]">
        <swiper
          :modules="modules"
          :grab-cursor="true"
          :centered-slides="true"
          :slides-per-view="1"
          :scrollbar="{
            el: '.swiper-scrollbar',
          }"
          :pagination="{
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: (currentClass, totalClass) => {
              return `<span class='${currentClass}'></span> / <span class='${totalClass}'></span>`
            },
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          class="relative h-[370px] w-full md:h-[326px]"
        >
          <swiper-slide v-for="index in 5" :key="index" class="">
            <img
              src="/images/image-d-gallery_1.png"
              alt=""
              class="h-full max-h-[326px] w-full object-cover"
            />
          </swiper-slide>
          <div v-if="isSmallScreen" class="">
            <div
              class="absolute bottom-16 left-8 z-30 flex w-[250px] items-end gap-2"
            >
              <div
                class="swiper-horizontal !relative flex w-[176px] items-center py-4"
              >
                <div
                  class="swiper-scrollbar !relative max-h-[3px] max-w-[176px]"
                >
                  <div class="swiper-scrollbar-drag !bg-primary-2"></div>
                </div>
              </div>
              <div
                class="swiper-pagination !relative flex !w-fit -translate-y-2 justify-end py-1 text-xs text-primary-2"
              ></div>
            </div>
            <div class="absolute bottom-2 left-8 z-30 flex w-20 items-center">
              <div class="swiper-button-prev after:hidden">
                <icon
                  icon="heroicons:arrow-long-left-solid"
                  class="absolute text-2xl text-primary-1"
                ></icon>
              </div>
              <div class="swiper-button-next after:hidden">
                <icon
                  icon="heroicons:arrow-long-right-solid"
                  class="absolute text-2xl text-primary-1"
                ></icon>
              </div>
            </div>
          </div>
        </swiper>
      </div>
    </div>

    <!-- Video -->
    <div class="mt-40">
      <h1 class="heading__title text-center">Preview Video Mempelai</h1>
      <div class="mt-10 h-full w-full">
        <img
          src="/images/image-d-gallery_2.png"
          alt=""
          class="h-[342px] w-full object-cover"
        />
      </div>
      <div class="mt-10 flex items-center justify-center">
        <button
          class="btn flex items-start gap-3 border-primary-4 px-28 py-3 text-primary-4"
        >
          <p class="content__sub">Kirim Ucapan</p>
          <icon
            icon="mdi:paper-airplane-variant"
            class="-rotate-45 text-xs"
          ></icon>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped></style>
