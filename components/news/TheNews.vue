<template>
  <section class="news">
    <div class="wrapper">
      <div v-if="news" class="cards">
        <TheItem
          v-for="{ name, code, previewText, date, image, type } in news"
          :key="code"
          :name="name"
          :code="code"
          :preview-text="previewText"
          :date="date"
          :image="image"
          :type="type"
        />
      </div>
      <button v-if="nav.current < nav.total" class="button" @click="loadMore">Загрузить ещё</button>
    </div>
  </section>
</template>

<script setup>
  import { useNews } from '@/store/News'
  import { storeToRefs } from 'pinia'

  const config = useRuntimeConfig()

  const store = useNews()
  let { nav, news } = storeToRefs(store)

  async function loadMore() {

    const { data, error } = await useFetch(`${config.public.api}/${nav.value.current}`, {
      transform(data) {
        return JSON.parse(data)
      }
    })

    for (let i of data.value.items) {
      store.addNews(i)
    }

    store.setNav(nav + 1)
  }


</script>

<style lang="sass" scoped>
.news
  padding-top: 64px
  padding-bottom: 72px

.cards
  display: grid
  gap: 64px 48px
  grid: repeat(auto-fill, minmax(200px, 1fr)) / repeat(auto-fill, minmax(min-content, 536px))
  justify-content: center

.button
  display: block
  margin: 72px auto 0 auto
  padding: 16px 32px
  font-size: 20px
  font-weight: 600
  line-height: 24px
  letter-spacing: -0.01em
  text-align: center
  color: #002DBF
  background: transparent
  border: 1px solid #002DBF
  cursor: pointer


</style>