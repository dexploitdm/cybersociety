<template>
  <div class="home">
    <elements-slider />
    <elements-cools-one />
    <elements-preview-services />
    <elements-cools-two />
    <search-people />
    <elements-news />
  </div>
</template>

<script>
import ElementsSlider from '@/components/elements/slider'
import ElementsPreviewServices from '@/components/elements/previewServices'
import ElementsCoolsOne from '@/components/elements/cools/coolsOne'
import ElementsCoolsTwo from '@/components/elements/cools/coolsTwo'
import searchPeople from '@/components/elements/searchPeople'
import ElementsNews from '@/components/elements/news'
export default {
  layout: 'main',
  components: {
    ElementsSlider, ElementsPreviewServices, ElementsCoolsOne, ElementsCoolsTwo, searchPeople, ElementsNews
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
