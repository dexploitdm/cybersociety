<template>
  <div class="page">
    <search-people/>
  </div>
</template>

<script>
  import searchPeople from '@/components/elements/searchPeople'

  export default {
    layout: 'main',
    name: "search",
    components: {
      searchPeople
    }
  }
</script>

<style scoped>

</style>
