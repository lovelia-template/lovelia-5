<script setup lang="ts"></script>

<template>
  <div class="container relative min-h-screen">
    <div
      class="relative flex flex-col items-center gap-7 py-[72px] text-primary-1"
    >
      <div class="mb-7 flex w-full items-center gap-5 opacity-50 md:gap-16">
        <span class="block h-[1px] w-full bg-primary-1"></span>
        <p class="font-miama text-2xl">Prologue</p>
      </div>
      <div class="relative flex h-[144px] items-center justify-center">
        <img
          src="/images/heading.png"
          class="absolute hidden h-[202px] w-full max-w-[284px] object-cover object-center md:block"
          alt=""
        />
        <img
          src="/images/mobile-heading.png"
          class="absolute block h-[150px] w-full max-w-[200px] object-cover object-center md:hidden"
          alt=""
        />
        <h1
          class="heading__title relative z-20 max-w-[200px] text-center md:max-w-[527px]"
        >
          “Ketika dua hati bersatu, sebuah kisah cinta abadi terukir. Bersama,
          mari kita rayakan cinta dan kebahagiaan kami”
        </h1>
      </div>
      <p
        class="content__sub mt-[72px] text-left text-primary-3 md:mt-0 md:text-center"
      >
        Revida & Albert
      </p>
    </div>
    <div
      class="flex w-full flex-col items-center justify-center gap-10 py-10 text-center text-primary-1 opacity-50 md:py-20"
    >
      <p class="content__sub max-w-[526px] text-center">
        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
        (kebesaran Allah) bagi kaum yang berpikir.
      </p>
      <p class="content__sub font-semibold">QS. Ar-Rum Ayat 21</p>
    </div>
  </div>
</template>
<style lang="postcss" scoped></style>
