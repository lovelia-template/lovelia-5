<script setup lang="ts"></script>

<template>
  <div class="container">
    <div
      class="relative flex flex-col items-center gap-7 py-[72px] text-primary-1"
    >
      <div class="relative flex h-[144px] items-center justify-center">
        <img
          src="/images/heading.png"
          class="absolute hidden h-[202px] w-full max-w-[284px] object-cover object-center md:block"
          alt=""
        />
        <img
          src="/images/mobile-heading.png"
          class="absolute block h-[140px] w-full max-w-[200px] object-cover md:hidden"
          alt=""
        />
        <h1
          class="heading__title relative z-10 max-w-[189px] text-center md:max-w-[527px]"
        >
          “Kami menantikan momen spesial ini bersama orang-orang tercinta.
          Terima kasih atas kehadiran dan doa Anda.”
        </h1>
      </div>
      <p
        class="content__sub mt-10 text-left text-primary-3 md:mt-0 md:text-center"
      >
        Revida & Albert
      </p>
      <div class="mt-7 flex w-full items-center gap-5 opacity-50 md:gap-16">
        <span class="block h-[1px] w-full bg-primary-1"></span>
        <p class="font-miama text-2xl">Epilogue</p>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped></style>
