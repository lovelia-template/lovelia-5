<script setup lang="ts">
  import { Icon } from '@iconify/vue'

  const submit = () => {}
</script>

<template>
  <div class="container relative min-h-screen">
    <!-- send gift -->
    <div
      class="flex flex-col items-start justify-center py-[72px] md:items-center"
    >
      <h1 class="content__main text-primary-4">Kirim Hadiah</h1>
      <p
        class="content__sub mt-5 max-w-[526px] text-left text-primary-3 md:mt-10 md:text-center"
      >
        Hadir dan doa restu Bapak/Ibu/Saudara/i sangat berarti bagi kami. Jika
        tidak dapat hadir, namun ingin menyampaikan kasih, gunakan fitur di
        bawah ini.
      </p>
      <button
        class="btn mt-10 flex items-start gap-3 border-primary-4 px-28 py-3 text-primary-4"
      >
        <p class="content__sub w-max">Kirim Hadiah</p>
        <icon
          icon="mdi:paper-airplane-variant"
          class="-rotate-45 text-xs"
        ></icon>
      </button>
    </div>

    <!-- send phrase -->
    <div class="relative py-[72px]">
      <h1 class="content__main text-left text-primary-4 md:text-center">
        Kirim Ucapan
        <span class="inline md:block">& Doa</span>
      </h1>
      <div
        class="my-5 flex flex-col items-center justify-center gap-5 md:my-10 md:flex-row md:gap-[87px]"
      >
        <div class="w-full md:w-1/2">
          <p class="content__sub text-primary-3">
            Hadir dan doa restu Bapak/Ibu/Saudara/i sangat berarti bagi kami.
            Jika tidak dapat hadir, namun ingin menyampaikan kasih, gunakan
            fitur di bawah ini.
          </p>
        </div>
        <form class="w-full md:w-1/2" @submit.prevent="submit">
          <div class="">
            <div class="flex flex-col gap-1 text-primary-3">
              <label for="name" class="py-3 text-xs md:text-base">Nama</label>
              <div class="relative flex items-center border-b border-primary-3">
                <icon icon="mdi:user" class="absolute text-xl"></icon>
                <input
                  id="name"
                  type="text"
                  class="w-full bg-transparent py-3 pl-7 pr-2 text-xs outline-none placeholder:text-primary-3 md:text-base"
                  placeholder="Masukkan Nama"
                />
              </div>
            </div>
            <div class="mt-1 flex flex-col gap-1 text-primary-3">
              <label for="name" class="py-3 text-xs md:text-base">Pesan</label>
              <div class="relative flex items-center border-b border-primary-3">
                <icon
                  icon="mdi:paper-airplane-variant"
                  class="absolute -rotate-45 text-xl"
                ></icon>
                <input
                  id="name"
                  type="text"
                  class="w-full bg-transparent py-3 pl-7 pr-2 text-xs outline-none placeholder:text-primary-3 md:text-base"
                  placeholder="Masukkan Pesan"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="mt-10 flex items-center justify-center">
        <button
          type="submit"
          class="btn flex items-start gap-3 border-primary-4 px-28 py-3 text-primary-4"
        >
          <p class="content__sub w-max">Kirim Ucapan</p>
          <icon
            icon="mdi:paper-airplane-variant"
            class="-rotate-45 text-xs"
          ></icon>
        </button>
      </div>
    </div>

    <!-- phrase list -->
    <div class="py-20">
      <h1 class="content__main mb-10 text-center text-primary-4">
        Ucapan & Doa
      </h1>
      <div class="h-[54vh] overflow-y-auto">
        <span
          class="block h-[1px] w-[calc(100%-1rem)] bg-primary-4 opacity-50 md:w-[calc(100%-2.5rem)]"
        ></span>
        <div v-for="index in 3" :key="index" class="pr-4 md:pr-10">
          <!-- 10 -->
          <div
            class="flex h-[180px] items-center border-b border-primary-4 border-opacity-50"
          >
            <div class="w-[117px] px-0 md:px-6">
              <p class="content__sub w-max text-primary-4">
                13 Juni
                <span class="block">2024</span>
              </p>
            </div>
            <div class="pl-10 md:px-10">
              <p class="content__sub text-primary-4">Desi Maharani Putri</p>
              <p class="content__sub mt-3 text-primary-3">
                Selamat menikah, semoga kebahagiaan selalu menyertai perjalanan
                hidup kalian berdua! 🎉🤵👰
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped></style>
