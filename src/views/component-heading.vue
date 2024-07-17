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
      class="relative flex h-[202px] w-full flex-col items-center justify-center md:justify-center"
    >
      <img
        src="/images/heading.png"
        class="absolute h-full w-full max-w-[284px] object-cover opacity-50"
        alt=""
      />
      <div
        class="relative z-10 flex h-full max-h-[137px] translate-y-5 flex-col items-center justify-between pb-2 md:max-h-[156px]"
      >
        <h2 class="heading__subtitle capitalize opacity-50">
          {{ props.subtittle }}
        </h2>
        <h1 class="font-miama text-center text-4xl capitalize leading-[50px]">
          {{ props.tittle }}
          <span class="block">{{ props.sub }}</span>
        </h1>
      </div>
    </div>
  </div>
</template>
