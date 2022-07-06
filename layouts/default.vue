<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer height="180" :absolute="!fixed" app class="footer">
      <h2 class="pb-8">All rights reserved</h2>
      <h3>Mahmoud, Amirhosein, Hosein</h3>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      fixed: false,
      title: 'Marketplace',
    }
  },
}
</script>
