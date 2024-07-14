<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { ref } from 'vue'

  const isPresent = ref<boolean | null>(true)

  const attendance = () => {
    isPresent.value = true
  }
  const notAttendance = () => {
    isPresent.value = false
  }

  const submit = () => {}
</script>

<template>
  <div class="container relative py-[72px]">
    <div
      class="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-[87px]"
    >
      <div class="w-full md:w-1/2">
        <p class="text-primary-3">
          Mohon berikan konfirmasi kehadiran Anda melalui fitur RSVP ini. Doa
          dan ucapan kebahagiaan dari Anda akan menjadi bagian yang tak ternilai
          dalam perayaan pernikahan kami. Terima kasih atas kebaikan hati Anda.
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
                class="w-full bg-transparent py-3 pl-7 pr-2 text-xs outline-none placeholder:text-primary-3 md:text-base md:placeholder:text-xs"
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
        <div class="mt-5 flex flex-col">
          <div class="flex items-center gap-4">
            <div
              class="flex h-4 w-4 items-center justify-center rounded-full border border-primary-3 bg-primary-2"
            >
              <button
                id="present"
                class="h-2 w-2 rounded-full bg-primary-2"
                :class="{
                  'bg-primary-3': isPresent === true,
                  'bg-primary-2': isPresent === false,
                }"
                @click="attendance()"
              ></button>
            </div>
            <label for="present" class="text-xs text-primary-3 md:text-base">
              Berkenan hadir
            </label>
          </div>
          <div class="mt-3 flex items-center gap-4">
            <div
              class="flex h-4 w-4 items-center justify-center rounded-full border border-primary-3 bg-primary-2"
            >
              <button
                id="notPresent"
                class="h-2 w-2 rounded-full bg-primary-2"
                :class="{
                  'bg-primary-2': isPresent === true,
                  'bg-primary-3': isPresent === false,
                }"
                @click="notAttendance()"
              ></button>
            </div>
            <label for="notPresent" class="text-xs text-primary-3 md:text-base">
              Tidak bisa hadir
            </label>
          </div>
        </div>
      </form>
    </div>
    <div class="mt-10 flex items-center justify-center">
      <button
        type="submit"
        class="btn flex items-center gap-3 border-primary-4 px-28 py-3 text-primary-4"
      >
        <p class="w-max">Kirim Ucapan</p>
        <icon
          icon="mdi:paper-airplane-variant"
          class="-rotate-45 text-xs"
        ></icon>
      </button>
    </div>
  </div>
</template>
<style lang="postcss" scoped></style>
