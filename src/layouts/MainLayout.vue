<template>
  <q-layout view="hHh LpR lFf">
    <q-header elevated>
      <q-toolbar class="text-center" style="background: linear-gradient(270deg, black 87%, gray);">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
        >
          <q-menu
            persistent auto-close
          >
            <q-list class="column">
              <q-item clickable v-close-popup href="/">
                <q-item-section>Home</q-item-section>
              </q-item>
              <q-item clickable v-close-popup href="/graduations">
                <q-item-section>Graduations</q-item-section>
              </q-item>
              <q-item clickable v-close-popup href="/weddings">
                <q-item-section>Weddings</q-item-section>
              </q-item>
              <q-item clickable v-close-popup href="/children">
                <q-item-section>Children</q-item-section>
              </q-item>
              <q-item clickable v-close-popup href="/family">
                <q-item-section>Family</q-item-section>
              </q-item>
              <q-item clickable v-close-popup href="/events">
                <q-item-section>Parties & Events</q-item-section>
              </q-item>
              <q-item clickable v-close-popup href="/artwork">
                <q-item-section>Digital Art Work</q-item-section>
              </q-item>
              <q-item clickable v-close-popup href="/landscapes">
                <q-item-section>Landscapes</q-item-section>
              </q-item>
              <q-item clickable v-close-popup href="https://migsbeast.github.io">
                <q-item-section>Website Designs</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-toolbar-title class="text-center">
          
        </q-toolbar-title>
        <q-btn icon="camera" label="instagram" type=a href="https://instagram.com/mars.air.studio" target="_blank"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="column bg-white text-center items-center text-grey q-pt-xs">
        <div>
          <div style="z-index: 0">
            <img src="logo.png" style="height:19vh;"/>
          </div>
          <div class="text-weight-bold" style="margin-left: 2.75vh; margin-top: -9.4vh">
            MARS AIR STUDIO
          </div>
        </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const drawerOpen = ref(false)

    return {
      drawerOpen,
      toggleDrawer () {
        drawerOpen.value = !drawerOpen.value
      }
    }
  }
})
</script>
