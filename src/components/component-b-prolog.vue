<script setup lang="ts"></script>

<template>
  <div class="container relative pb-[72px] pt-[124px] md:py-40">
    <div class="relative flex flex-col items-center gap-7 pb-[124px] md:pb-0">
      <p class="prolog__item">Prologue</p>
      <div class="relative flex items-center justify-center pb-10 pt-5">
        <h1
          class="prolog__heading relative z-20 max-w-[187px] text-center md:max-w-[527px]"
        >
          “Ketika dua hati bersatu, sebuah kisah cinta abadi terukir. Bersama,
          mari kita rayakan cinta dan kebahagiaan kami”
        </h1>
      </div>
      <p class="prolog__paragraph text-primary-3">Revida & Albert</p>
    </div>
    <div
      class="mt-[72px] flex w-full flex-col items-center justify-center gap-10 text-center md:mt-40"
    >
      <p class="content__paragraph max-w-[526px] text-center">
        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
        (kebesaran Allah) bagi kaum yang berpikir.
      </p>
      <p class="prolog__paragraph font-bold text-primary-1">
        QS. Ar-Rum Ayat 21
      </p>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  .prolog__heading {
    @apply font-gotu text-base leading-8 md:text-2xl md:leading-[48px];
  }
  .prolog__item {
    @apply font-kaushanscript text-xs leading-[18px] text-primary-3 md:text-base md:leading-6;
  }
  .prolog__paragraph {
    @apply font-montserrat text-xs leading-6 md:text-base md:leading-8;
  }
</style>
