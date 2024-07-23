<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="relative flex flex-col items-center gap-7 py-40">
      <p class="epilog__item">Epilogue</p>
      <div
        class="relative flex h-full items-center justify-center pb-10 pt-5 md:h-[144px]"
      >
        <h1
          class="content__title relative z-20 max-w-[200px] text-center md:max-w-[527px]"
        >
          “Ketika dua hati bersatu, sebuah kisah cinta abadi terukir. Bersama,
          mari kita rayakan cinta dan kebahagiaan kami”
        </h1>
      </div>
      <p class="epilog__paragraph text-primary-3">Revida & Albert</p>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  .epilog__item {
    @apply font-kaushanscript text-xs leading-[18px] text-primary-3 md:text-base md:leading-6;
  }
  .epilog__paragraph {
    @apply font-montserrat text-xs leading-6 md:text-base md:leading-8;
  }
</style>
