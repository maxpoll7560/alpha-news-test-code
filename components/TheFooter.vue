<template>
  <footer>
    <div class="wrapper">
      <div class="logo">
        <NuxtLink to="/">
          <img src="/logo.png" alt="Alpha">
        </NuxtLink>
      </div>
      <p class="copyright">© alpha, {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="sass" scoped>
footer
  padding: 64px 0
  background: #F0F6FE

.logo
  height: 36px

.copyright
  margin-top: 30px
  font-size: 16px
  font-weight: 400
  line-height: 22px
  letter-spacing: 0
  color: #81899D

</style>