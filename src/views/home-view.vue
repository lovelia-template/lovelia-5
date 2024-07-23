<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { onMounted, onUnmounted, ref, watch } from 'vue'
  import type { Ref } from 'vue'
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
  import ComponentNavbar from '@/layouts/component-navbar.vue'
  import OpeningView from './opening-view.vue'

  const navbarActive = ref(false)
  const activeSection = ref('')

  const toggleNavbar = () => {
    navbarActive.value = !navbarActive.value
  }

  const openingRef = ref<HTMLElement | null>(null)
  const prologRef = ref<HTMLElement | null>(null)
  const groomRef = ref<HTMLElement | null>(null)
  const galleryRef = ref<HTMLElement | null>(null)
  const weddingRef = ref<HTMLElement | null>(null)
  const giftRef = ref<HTMLElement | null>(null)
  const rsvpRef = ref<HTMLElement | null>(null)
  const epilogRef = ref<HTMLElement | null>(null)

  const sections: Record<string, Ref<HTMLElement | null>> = {
    opening: openingRef,
    prolog: prologRef,
    groom: groomRef,
    gallery: galleryRef,
    wedding: weddingRef,
    gift: giftRef,
    rsvp: rsvpRef,
    epilog: epilogRef,
  }

  const scrollToSection = (section: keyof typeof sections) => {
    sections[section]?.value?.scrollIntoView({ behavior: 'smooth' })
  }

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      { threshold: 0.4 },
    )

    Object.values(sections).forEach((section) => {
      if (section.value) {
        observer.observe(section.value)
      }
    })

    onUnmounted(() => {
      Object.values(sections).forEach((section) => {
        if (section.value) {
          observer.unobserve(section.value)
        }
      })
    })
  })

  watch(activeSection, (newSection) => {
    console.log(`Active section: ${newSection}`)
  })
</script>

<template>
  <div>
    <opening-view></opening-view>
  </div>
  <main class="bg-primary-2">
    <div>
      <component-header @toggle-navbar="toggleNavbar"></component-header>
      <component-navbar
        :navbar-active="navbarActive"
        :active-section="activeSection"
        @scroll-to-section="scrollToSection"
        @toggle-navbar="toggleNavbar"
      ></component-navbar>
    </div>
    <div id="opening" ref="openingRef">
      <component-a-opening></component-a-opening>
    </div>
    <div
      class="container flex flex-col items-center justify-center pb-9 pt-[72px] md:hidden"
    >
      <p class="font-merriweather text-[10px] leading-[15px] text-primary-3">
        Wedding Invitations
      </p>
      <p class="font-gotu py-2 text-base leading-6 text-primary-1">
        Rahma & Aditya
      </p>
      <p class="font-merriweather text-[10px] leading-[15px] text-primary-3">
        Sabtu, 14 April 2024
      </p>
      <icon icon="majesticons:arrow-down" class="mt-10"></icon>
    </div>
    <div id="prolog" ref="prologRef" class="">
      <component-b-prolog></component-b-prolog>
    </div>
    <div id="groom" ref="groomRef" class="">
      <component-c-groom></component-c-groom>
    </div>
    <div id="gallery" ref="galleryRef" class="">
      <component-d-gallery></component-d-gallery>
    </div>
    <!-- <div id="wedding" ref="weddingRef" class="">
      <component-e-wedding></component-e-wedding>
    </div>
    <div id="gift" ref="giftRef" class="">
      <component-f-gift></component-f-gift>
    </div>
    <div id="rsvp" ref="rsvpRef" class="">
      <component-g-rsvp></component-g-rsvp>
    </div> -->
    <div id="epilog" ref="epilogRef" class="">
      <component-h-epilog></component-h-epilog>
    </div>
    <div class="">
      <component-footer></component-footer>
    </div>
  </main>
</template>

<style lang="postcss" scoped></style>
