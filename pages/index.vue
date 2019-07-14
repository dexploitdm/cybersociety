<template>
  <div class="home">
    <elements-partners />
    f


  </div>
</template>

<script>

import ElementsPartners from '@/components/elements/partners'
export default {
  layout: 'main',
  components: {
    ElementsPartners
  },
  mounted() {
    let jquery = document.createElement('script')
    jquery.setAttribute('src', 'jquery-3.3.1.js')
    document.head.appendChild(jquery);

    let distJS = document.createElement('script')
    distJS.setAttribute('src', 'dist.js')
    document.head.appendChild(distJS)
  },
}
</script>

<style>

</style>
