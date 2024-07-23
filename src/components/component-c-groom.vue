<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import ComponentHeading from '@/components/component-heading.vue'
</script>

<template>
  <div class="md:container md:py-40">
    <!-- Heading Mobile -->
    <component-heading
      number="01"
      main="tentang"
      sub="kami"
    ></component-heading>
    <!-- Section 1 Desktop -->
    <div class="flex flex-col-reverse items-center justify-between md:flex-row">
      <div class="relative h-full w-full border-primary-1 pb-20 md:w-1/2">
        <!-- Heading Desktop -->
        <img
          src="/images/start-background.png"
          class="absolute hidden -translate-x-full md:block"
          alt=""
        />
        <div
          class="relative hidden items-center justify-center pt-[141px] md:flex"
        >
          <div class="absolute left-0 top-0">
            <p
              class="font-gotu text-[256px] leading-[424.96px] text-primary-4 text-opacity-75"
            >
              01
            </p>
          </div>
          <div class="relative z-10 flex w-full items-center justify-end pb-8">
            <h1 class="content__heading w-[147px]">
              Tentang
              <span class="block">Kami</span>
            </h1>
            <div class="ml-[62px] pr-1">
              <span class="block h-[1px] w-[117px] bg-primary-1"></span>
            </div>
          </div>
        </div>
        <div
          class="relative z-20 h-full w-full bg-primary-2 px-10 pt-20 md:px-0"
        >
          <h1 class="groom__item">
            Ucapan
            <span class="block md:inline">Terima Kasih</span>
          </h1>
          <div class="max-w-[322px]">
            <p class="content__paragraph mt-5">
              Kami adalah Rahma dan Aditya, dua hati yang menyatu dalam cinta
              sejati dan kini berbuah manis dalam ikatan pernikahan
            </p>
            <p class="content__paragraph mt-3">
              Dengan rasa syukur yang mendalam, kami mengucapkan
              <span class="font-bold">terima kasih</span>
              atas dukungan dan cinta yang selalu mengiringi langkah kami
            </p>
          </div>
        </div>
      </div>
      <div class="relative h-full w-full md:w-fit">
        <img
          src="/images/image-c-groom_1.png"
          alt=""
          class="h-[394px] w-full object-cover md:h-[449px] md:w-[321px]"
        />
      </div>
    </div>
    <!-- section 2 -->
    <div class="mt-[70px]">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-fit">
          <img
            src="/images/image-c-groom_2.png"
            alt=""
            class="h-[393px] w-full object-cover md:h-[322px] md:w-[322px]"
          />
        </div>
        <div
          class="flex w-full items-center justify-center py-[88px] pl-0 md:w-1/2 md:justify-start md:py-0 md:pl-[88px]"
        >
          <div class="">
            <h1
              class="groom__title max-w-[273px] text-center md:max-w-[322px] md:text-left"
            >
              Mifta Husna
              <span class="inline md:block">Zsazsaning Ayu, S.Sos.</span>
            </h1>
            <p
              class="content__paragraph mt-5 max-w-[273px] text-center md:max-w-[322px] md:text-left"
            >
              Putra dari Bapak Rahmadi dan Ibu Yanti Mulyadi
            </p>
            <div
              class="mt-3 flex justify-center gap-4 md:mt-5 md:justify-start"
            >
              <icon
                icon="ri:facebook-fill"
                class="rounded-full bg-primary-3 p-[1px] text-xs text-primary-2"
              ></icon>
              <icon
                icon="mdi:instagram"
                class="rounded-full bg-primary-3 p-[1px] text-xs text-primary-2"
              ></icon>
              <icon
                icon="mdi:twitter"
                class="rounded-full bg-primary-3 p-[1px] text-xs text-primary-2"
              ></icon>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section 3 -->
    <div class="mt-0 md:mt-40">
      <div
        class="flex flex-col-reverse items-center justify-between md:flex-row"
      >
        <div
          class="flex w-full justify-center py-[88px] md:w-1/2 md:justify-normal md:py-0"
        >
          <div class="pl-0 text-center md:pl-[66px] md:text-left">
            <h1
              class="groom__title max-w-[273px] text-center md:max-w-[322px] md:text-left"
            >
              Mifta Husna
              <span class="inline md:block">Zsazsaning Ayu, S.Sos.</span>
            </h1>
            <p
              class="content__paragraph mt-5 max-w-[273px] text-center md:max-w-[322px] md:text-left"
            >
              Putra dari Bapak Rahmadi dan Ibu Yanti Mulyadi
            </p>
            <div
              class="mt-3 flex justify-center gap-4 md:mt-5 md:justify-start"
            >
              <icon
                icon="ri:facebook-fill"
                class="rounded-full bg-primary-3 p-[1px] text-xs text-primary-2"
              ></icon>
              <icon
                icon="mdi:instagram"
                class="rounded-full bg-primary-3 p-[1px] text-xs text-primary-2"
              ></icon>
              <icon
                icon="mdi:twitter"
                class="rounded-full bg-primary-3 p-[1px] text-xs text-primary-2"
              ></icon>
            </div>
          </div>
        </div>
        <div class="w-full md:w-fit">
          <img
            src="/images/image-c-groom_3.png"
            alt=""
            class="h-[393px] w-full object-cover md:h-[322px] md:w-[322px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  .groom__item {
    @apply font-kaushanscript text-base leading-6 tracking-[1.6px] text-primary-1;
  }
  .groom__title {
    @apply font-gotu text-base leading-8 tracking-wider md:text-2xl md:leading-[48px];
  }
</style>
