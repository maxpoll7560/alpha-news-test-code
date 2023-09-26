<template>
  <div class="card">
    <div v-if="props.image" class="card__image-wrapper">
      <img class="card__image" :src="props.image" :alt="props.name">
    </div>
    <div class="card__text-wrapper">
      <div class="card__date-wrapper">
        <p class="card__day">{{ date.day }}</p>
        <div>
          <p class="card__month">{{ date.month }}</p>
          <p class="card__year">{{ date.year }}</p>
        </div>
      </div>
      <NuxtLink :to="`/news/${props.code}`" class="card__title">{{ props.name }}</NuxtLink>
      <div class="card__description">{{ props.previewText }}</div>
      <div class="card__tag">{{ props.type?.value }}</div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    name: String,
    code: String,
    previewText: String,
    date: Number,
    image: String,
    type: Object
  })

  const date = computed(() => {
    return transformDate(props.date)
  })

</script>

<style lang="sass" scoped>
.card
  position: relative
  border-radius: 17px 17px 15px 15px
  border: 1px solid #0F62FE

  &__image-wrapper
    display: flex
    position: relative

  &__image
    width: calc(100% + 2px)
    max-width: 536px
    max-height: 250px
    margin-top: -1px
    margin-left: -1px
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
    left: 32px
    bottom: 32px
    padding: 4px 16px 4px 16px
    border-radius: 360px
    font-size: 14px
    line-height: 19.6px
    color: #00133A
    background: #F0F6FE


</style>