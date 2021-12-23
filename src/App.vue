<script setup lang="ts">
import { useHead } from '@vueuse/head'

const title = 'wvffle.net :wq'
const description = 'Vue 3 developer'

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    /*
    {
      property: 'og:image',
      content:
        'https://repository-images.githubusercontent.com/343114407/620b7080-7b02-11eb-96bc-e2f02ef328a7',
    },
    */
  ],
})
</script>

<template>
  <router-view />
</template>
