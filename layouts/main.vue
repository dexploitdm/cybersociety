<template>
  <div>

    <element-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
  import AppHeader from '@/components/app/AppHeader'
  import ElementHeader from '@/components/app/libs/ElementHeader'
  import AppFooter from '@/components/app/AppFooter'
  export  default {
    components: {
      AppHeader, AppFooter, ElementHeader
    }
  }
</script>
<style>

</style>
