<template>
  <div>
    <TheHeader/>
    <NuxtPage/>
    <TheFooter/>
  </div>
</template>

<script setup>
  import {useNews} from '@/store/News'
  import {storeToRefs} from 'pinia'

  const store = useNews()
  let {nav, news} = storeToRefs(store)

  const config = useRuntimeConfig()

  const {data, error} = await useFetch(config.public.api, {
    transform(data) {
      return JSON.parse(data)
    }
  })

  store.setNews(data.value.items)
  store.setNav(data.value.nav)

  useHead({
    title: 'Homepage',
    titleTemplate: '%s - Alpha news',
    meta: [
      {name: 'description', content: '%s - Alpha News'}
    ]
  })

</script>

<style lang="sass">
@use "assets/styles/reset"

::-webkit-scrollbar
  width: 5px
  background-color: #f1f1f1

  &-thumb
    border-radius: 5px
    background-color: #0F62FE

body
  font-family: 'Nunito Sans', serif
  font-size: 16px

.wrapper
  width: 100%
  max-width: 1920px
  margin: 0 auto
  padding: 0 100px

  @media screen and (max-width: 700px)
    padding: 0 30px
</style>