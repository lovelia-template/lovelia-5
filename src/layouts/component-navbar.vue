<script setup lang="ts">
  import { Icon } from '@iconify/vue'

  const props = defineProps<{
    navbarActive: boolean
    activeSection: string
  }>()
  const emit = defineEmits(['toggle-navbar', 'scroll-to-section'])

  const toggleNavbar = () => {
    emit('toggle-navbar')
  }

  const scrollToSection = (section: string) => {
    toggleNavbar()
    setTimeout(() => {
      emit('scroll-to-section', section)
    }, 300)
  }
</script>

<template>
  <main>
    <transition name="scroll-down">
      <div v-if="props.navbarActive" class="fixed z-30 w-full bg-primary-1">
        <div
          class="flex h-screen flex-col items-center justify-between px-10 text-primary-2 md:container"
        >
          <div class="flex w-full justify-between py-6">
            <p class="content__sub">Revida & Albert</p>
            <button class="flex items-center gap-2" @click="toggleNavbar">
              <p class="content__sub">Close</p>
              <icon icon="mdi:close" class="text-2xl text-primary-2"></icon>
            </button>
          </div>
          <div class="mb-7 flex w-full items-center gap-5">
            <span class="block h-[1px] w-full bg-primary-2"></span>
            <p class="content__sub w-[76px] text-primary-2">Menu</p>
          </div>
          <ul
            class="flex h-2/4 flex-col items-center justify-center gap-5 text-base"
          >
            <li>
              <button
                class="content__sub"
                :class="{ 'text-primary-4': props.activeSection === 'opening' }"
                @click="scrollToSection('opening')"
              >
                Kembali ke Atas
              </button>
            </li>
            <li>
              <button
                class="content__sub"
                :class="{ 'text-primary-4': props.activeSection === 'groom' }"
                @click="scrollToSection('groom')"
              >
                Tentang Mempelai
              </button>
            </li>
            <li>
              <button
                class="content__sub"
                :class="{ 'text-primary-4': props.activeSection === 'gallery' }"
                @click="scrollToSection('gallery')"
              >
                Galeri & Video
              </button>
            </li>
            <li>
              <button
                class="content__sub"
                :class="{ 'text-primary-4': props.activeSection === 'wedding' }"
                @click="scrollToSection('wedding')"
              >
                Detail Acara
              </button>
            </li>
            <li>
              <button
                class="content__sub"
                :class="{ 'text-primary-4': props.activeSection === 'gift' }"
                @click="scrollToSection('gift')"
              >
                Kirim Hadiah & Ucapan
              </button>
            </li>
            <li>
              <button
                class="content__sub"
                :class="{ 'text-primary-4': props.activeSection === 'rsvp' }"
                @click="scrollToSection('rsvp')"
              >
                RSVP
              </button>
            </li>
          </ul>
          <div class="flex flex-col items-center">
            <p class="content__sub">&copy; Lovelia. All right reserved.</p>
            <div class="flex justify-end gap-4 py-5 md:justify-start">
              <icon
                icon="ri:facebook-fill"
                class="rounded-full bg-primary-2 text-xs text-primary-1"
              ></icon>
              <icon
                icon="mdi:instagram"
                class="rounded-full bg-primary-2 p-[1px] text-xs text-primary-1"
              ></icon>
              <icon
                icon="mdi:twitter"
                class="rounded-full bg-primary-2 p-[1px] text-xs text-primary-1"
              ></icon>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>

<style lang="postcss" scoped>
  .scroll-down-enter-active,
  .scroll-down-leave-active {
    @apply duration-300;
  }

  .scroll-down-enter-from,
  .scroll-down-leave-to {
    @apply -translate-y-full;
  }
</style>
