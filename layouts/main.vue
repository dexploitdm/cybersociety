<template>
  <div>
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
  import AppHeader from '@/components/app/AppHeader'
  import AppFooter from '@/components/app/AppFooter'
  export  default {
    components: {
      AppHeader, AppFooter
    }
  }
</script>
<style>

</style>
