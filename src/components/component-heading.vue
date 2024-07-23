<script setup lang="ts">
  const props = defineProps<{
    number: string
    main: string
    sub: string
  }>()
</script>
<template>
  <div class="relative">
    <img
      src="/images/start-background.png"
      class="absolute right-10 top-10 block max-w-[90px] md:hidden"
      alt=""
    />
    <div class="relative flex items-center justify-center pt-[141px] md:hidden">
      <div class="absolute left-0 top-0 -translate-x-[96px]">
        <p
          class="font-gotu text-[256px] leading-[424.96px] text-primary-4 text-opacity-75"
        >
          {{ props.number }}
        </p>
      </div>
      <div
        class="mt- relative z-10 flex w-full items-center justify-between pb-10 pl-[46px]"
      >
        <h1 class="content__heading w-[147px] capitalize">
          {{ props.main }}
          <span class="block">{{ props.sub }}</span>
        </h1>
        <div class="ml-5">
          <span class="block h-[1px] w-[117px] bg-primary-1"></span>
        </div>
      </div>
    </div>
  </div>
</template>
