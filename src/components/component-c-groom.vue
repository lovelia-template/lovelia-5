<script setup lang="ts">
  import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="container min-h-screen">
    <div class="flex flex-col items-center py-[72px] md:flex-row">
      <div class="relative h-full w-full md:w-1/2">
        <img
          src="/images/image-c-groom_1.png"
          alt=""
          class="h-[451px] w-[322px] object-cover"
        />
      </div>
      <div
        class="mt-5 w-full max-w-full border-primary-1 pl-2 md:mt-0 md:w-1/2"
      >
        <h1 class="">Ucapan Terima Kasih</h1>
        <p class="mt-5">
          Kami adalah Rahma dan Aditya, dua hati yang menyatu dalam cinta sejati
          dan kini berbuah manis dalam ikatan pernikahan
        </p>
        <p class="mt-3">
          Dengan rasa syukur yang mendalam, kami mengucapkan
          <span class="font-bold">terima kasih</span>
          atas dukungan dan cinta yang selalu mengiringi langkah kami
        </p>
      </div>
    </div>
    <!-- section 2 -->
    <div class="py-[72px]">
      <div
        class="flex flex-col-reverse items-center justify-center gap-10 md:flex-row md:gap-20"
      >
        <div
          class="flex w-full items-center justify-start pl-0 md:w-1/2 md:justify-center md:pl-16"
        >
          <div class="md:max-w-[322px]">
            <h1 class="">
              Mifta Husna
              <span class="block">Zsazsaning Ayu, S.Sos.</span>
            </h1>
            <p class="mt-5 text-primary-3 md:mt-10">
              Putra dari Bapak Rahmadi dan Ibu Yanti Mulyadi
            </p>
            <div class="mt-5 flex gap-4">
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
        </div>
        <div class="min-w-1/2">
          <img
            src="/images/image-c-groom_2.png"
            alt=""
            class="h-[322px] w-[322px] object-cover"
          />
        </div>
      </div>
    </div>
    <!-- section 3 -->
    <div class="py-[72px]">
      <div
        class="flex flex-col-reverse items-center justify-center gap-10 md:flex-row-reverse"
      >
        <div
          class="flex w-full items-center justify-end pr-0 md:w-1/2 md:justify-center md:pr-24"
        >
          <div class="max-w-[322px] text-right md:text-left">
            <h1 class="">
              Mifta Husna
              <span class="block">Zsazsaning Ayu, S.Sos.</span>
            </h1>
            <p class="mt-5 text-primary-3 md:mt-10">
              Putra dari Bapak Rahmadi dan Ibu Yanti Mulyadi
            </p>
            <div class="mt-5 flex justify-end gap-4 md:justify-start">
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
        </div>
        <div class="w-full md:w-1/2">
          <img
            src="/images/image-c-groom_3.png"
            alt=""
            class="h-[322px] w-[322px] object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped></style>
