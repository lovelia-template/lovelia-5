<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import 'swiper/css/scrollbar'
  import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { computed } from 'vue'
  import ComponentHeading from '@/components/component-heading.vue'

  const modules = [Navigation, Pagination, Scrollbar]
  const isSmallScreen = computed(() => window.innerWidth < 768)
  console.log(isSmallScreen.value)
</script>

<template>
  <div class="relative md:container md:py-40">
    <!-- Heading Mobile -->
    <component-heading number="02" main="galeri" sub="foto"></component-heading>

    <!-- Heading Desktop -->
    <!-- Heading Desktop -->
    <img
      src="/images/start-background.png"
      class="absolute right-0 hidden -translate-x-full md:block"
      alt=""
    />
    <div class="relative hidden items-center justify-center pt-[141px] md:flex">
      <div class="absolute right-0 top-0">
        <p
          class="font-gotu text-[256px] leading-[424.96px] text-primary-4 text-opacity-75"
        >
          02
        </p>
      </div>
      <div class="relative z-10 flex w-full items-center justify-between pb-8">
        <div class="">
          <span class="block h-[1px] w-[390px] bg-primary-1"></span>
        </div>
        <h1 class="content__heading w-[147px]">
          Galeri
          <span class="block">Kami</span>
        </h1>
      </div>
    </div>

    <!-- Section 1 -->
    <div
      class="relative z-20 flex w-full flex-col bg-primary-2 py-20 md:flex-row"
    >
      <div
        v-if="!isSmallScreen"
        class="flex h-full w-full flex-col justify-center text-center md:h-[326px] md:w-1/2 md:text-left"
      >
        <div class="relative hidden pt-0 md:block md:pt-28">
          <h1 class="content__title">
            Galeri
            <span class="block">Foto Mempelai</span>
          </h1>
        </div>
        <div class="flex h-1/2 flex-col justify-end">
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
          <div class="relative mt-10 flex h-full w-full items-center gap-1">
            <div
              class="swiper-horizontal !relative flex w-[235px] items-center py-4"
            >
              <div class="swiper-scrollbar !relative max-h-[3px] max-w-[235px]">
                <div class="swiper-scrollbar-drag !bg-primary-1"></div>
              </div>
            </div>
            <div class="!relative h-full w-16">
              <div class="swiper-pagination !text-primary-1">
                <span class="swiper-pagination-current"></span>
                <span class="swiper-pagination-total"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-[410px]">
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
              class="absolute bottom-16 left-[70px] z-30 flex w-[200px] items-end gap-1"
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
                class="swiper-pagination !relative mb-1 !w-14 !text-primary-2"
              >
                <span class="swiper-pagination-current"></span>
                <span class="swiper-pagination-total"></span>
              </div>
            </div>
            <div
              class="absolute bottom-3 left-8 z-30 flex w-[76px] items-center"
            >
              <div class="swiper-button-prev after:hidden">
                <icon
                  icon="basil:arrow-left-outline"
                  class="text-primary-1"
                ></icon>
              </div>
              <div class="swiper-button-next after:hidden">
                <icon
                  icon="basil:arrow-right-outline"
                  class="text-primary-1"
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
