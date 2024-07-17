<script setup lang="ts">
  const props = defineProps<{
    tittle: string
    sub: string
    subtittle: string
  }>()
</script>
<template>
  <div class="container flex justify-center py-20">
    <div
      class="relative flex h-[202px] w-full flex-col items-center justify-end md:justify-center"
    >
      <img
        src="/images/heading.png"
        class="absolute h-full w-full max-w-[284px] object-cover opacity-50"
        alt=""
      />
      <div
        class="relative z-10 flex h-full max-h-[127px] flex-col items-center justify-between pb-2 md:max-h-[156px]"
      >
        <h1 class="heading__title text-center capitalize">
          {{ props.tittle }}
          <span class="block">{{ props.sub }}</span>
        </h1>
        <h2 class="heading__subtitle capitalizeopacity-50">
          {{ props.subtittle }}
        </h2>
      </div>
    </div>
  </div>
</template>
