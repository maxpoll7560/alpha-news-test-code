<template>
  <div>
    <TheBackground :title="current.name"/>



    <div class="wrapper">
      <div @click="goBack" class="back">Назад</div>
      <div class="card">
        <div v-if="current.image" class="card__image-wrapper">
          <img class="card__image" :src="current.image" :alt="current.name">
        </div>
        <div class="card__text-wrapper">
          <div class="card__date-wrapper">
            <p class="card__day">{{ date.day }}</p>
            <div>
              <p class="card__month">{{ date.month }}</p>
              <p class="card__year">{{ date.year }}</p>
            </div>
          </div>
          <h1 class="card__title">{{ current.name }}</h1>
          <div class="card__description">{{ current.previewText }}</div>
          <div class="card__tag">{{ current.type?.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useNews } from '@/store/News'
  import { storeToRefs } from 'pinia'

  const store = useNews()
  let { news } = storeToRefs(store)

  const route = useRoute()
  const router = useRouter()

  let current = ref(1)

  for (let i of news.value) {
    if (i.code === route.params.slug ) {
      current = i
    }
  }

  const date = computed(() => {
    return transformDate(current.date)
  })

  useHead({
    title: current.name,
    meta: [
      {name: 'description', content: '%s - Alpha News'}
    ]
  })

  function goBack() {
    router.go(-1)
  }

</script>

<style lang="sass" scoped>
.card
  position: relative
  display: flex
  flex-direction: column
  flex-wrap: wrap
  margin: 30px 0 100px 0
  border-radius: 17px 17px 15px 15px
  border: 1px solid #0F62FE

  &__image-wrapper
    display: flex
    position: relative

  &__image
    width: 100%
    max-height: 350px
    margin-top: -1px
    object-fit: cover
    border-top-left-radius: 15px
    border-top-right-radius: 15px

  &__text-wrapper
    padding: 32px 32px 100px


  &__date-wrapper
    display: flex

  &__day
    padding-right: 3px
    font-size: 36px
    font-weight: 400
    line-height: 36px
    letter-spacing: 0
    color: #A1A7B5

  &__month,
  &__year
    font-size: 15px
    font-weight: 700
    line-height: 17px
    letter-spacing: -0.01em
    color: #A1A7B5

  &__title
    display: inline-block
    padding: 16px 0
    font-size: 22px
    font-weight: 400
    line-height: 26px
    letter-spacing: 0
    color: #0C5BEF

  &__tag
    position: absolute
    right: 32px
    bottom: 32px
    padding: 4px 16px 4px 16px
    border-radius: 360px
    font-size: 14px
    line-height: 19.6px
    color: #00133A
    background: #F0F6FE

.back
  display: block
  width: 80px
  margin-top: 30px
  padding: 4px 16px 4px 16px
  border-radius: 20px
  font-size: 14px
  line-height: 19.6px
  text-align: center
  color: #00133A
  background: #F1F1F1
  cursor: pointer

</style>