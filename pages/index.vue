<template>
  <div class="home">
    <elements-partners />
    <elements-preview-services />
    <elements-cools-one />
    <elements-cools-two />
    <elements-reviews />
    <elements-news />

  <div class="pad"></div>

  </div>
</template>

<script>

import ElementsPartners from '@/components/elements/partners'
import ElementsPreviewServices from '@/components/elements/previewServices'
import ElementsCoolsOne from '@/components/elements/cools/coolsOne'
import ElementsCoolsTwo from '@/components/elements/cools/coolsTwo'
import ElementsReviews from '@/components/elements/reviews'
import ElementsNews from '@/components/elements/news'
export default {
  layout: 'main',
  components: {
    ElementsPartners, ElementsPreviewServices, ElementsCoolsOne, ElementsCoolsTwo, ElementsReviews, ElementsNews
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
  .pad {
    padding-bottom: 50px;
  }
</style>
