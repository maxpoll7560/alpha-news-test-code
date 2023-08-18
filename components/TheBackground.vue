<template>
  <section class="background">
    <div class="wrapper wrapper--flex">
      <div class="caption">
        <h1 class="caption__title">{{ props.title }}</h1>
      </div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    title: String,
    image: String
  })

</script>

<style lang="sass" scoped>
.background
  display: flex
  min-height: 320px
  background-image: url("/img.jpg")
  background-repeat: no-repeat
  background-position: center
  background-size: cover

.wrapper
  &--flex
    display: flex
    align-items: flex-end

.caption
  padding: 48px 0

  &__title
    font-size: 40px
    font-weight: 700
    line-height: 48px
    letter-spacing: -0.01em
    text-align: left

</style>