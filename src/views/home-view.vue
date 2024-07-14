<script setup lang="ts">
  import ComponentAOpening from '@/components/component-a-opening.vue'
  import ComponentBProlog from '@/components/component-b-prolog.vue'
  import ComponentCGroom from '@/components/component-c-groom.vue'
  import ComponentDGallery from '@/components/component-d-gallery.vue'
  import ComponentEWedding from '@/components/component-e-wedding.vue'
  import ComponentFGift from '@/components/component-f-gift.vue'
  import ComponentGRsvp from '@/components/component-g-rsvp.vue'
  import ComponentHEpilog from '@/components/component-h-epilog.vue'
  import ComponentFooter from '@/layouts/component-footer.vue'
  import ComponentHeader from '@/layouts/component-header.vue'
  import ComponentHeading from './component-heading.vue'
</script>

<template>
  <main class="bg-primary-2">
    <div>
      <component-header></component-header>
    </div>
    <div>
      <component-a-opening></component-a-opening>
    </div>
    <div class="mt-28 md:mt-52">
      <component-b-prolog></component-b-prolog>
    </div>
    <div class="mt-0 md:mt-52">
      <component-heading
        tittle="Cerita Tentang Kedua"
        sub="mempelai"
        subtittle="chapter - 01"
      ></component-heading>
      <component-c-groom></component-c-groom>
    </div>
    <div class="mt-0 md:mt-52">
      <component-heading
        tittle="Galeri Foto dan Video"
        sub="mempelai"
        subtittle="chapter - 02"
      ></component-heading>
      <component-d-gallery></component-d-gallery>
    </div>
    <div class="mt-0 md:mt-52">
      <component-heading
        tittle="agenda acara"
        sub="pernikahan"
        subtittle="chapter - 03"
      ></component-heading>
      <component-e-wedding></component-e-wedding>
    </div>
    <div class="mt-0 md:mt-52">
      <component-heading
        tittle="Kirim"
        sub="hadiah dan ucapan"
        subtittle="chapter - 04"
      ></component-heading>
      <component-f-gift></component-f-gift>
    </div>
    <div class="mt-0 md:mt-52">
      <component-heading
        tittle="RSVP: Konfirmasi"
        sub="kehadiran"
        subtittle="chapter - 05"
      ></component-heading>
      <component-g-rsvp></component-g-rsvp>
    </div>
    <div class="mt-0 md:mt-52">
      <component-h-epilog></component-h-epilog>
    </div>
    <div class="mt-0 md:mt-52">
      <component-footer></component-footer>
    </div>
  </main>
</template>
