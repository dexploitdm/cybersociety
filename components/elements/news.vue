<template>
  <section class="lg bg-dark boxes-4up utility-collapse" data-equalizer>
    <div class="row full-width">
      <div class="feature-box column medium-6" data-equalizer-watch>
        <div class="feature-box_inner">
          <h2 class="section_title utility-collapse-bottom">Важные статьи</h2>
          <div class="news-list">
            <div class="news-item">
              <a href="#">
                <div class="byline">June 18, 2019</div>
                <h4 class="news-title">Podcast: Open Source Underdogs Episode 23: Neo4j – Graph Database Platform with Emil Eifrem</h4>
              </a>
            </div>
            <div class="news-item">
              <a href="#">
                <div class="byline">June 14, 2019</div>
                <h4 class="news-title">Developing a Small-Scale Graph Database: A Ten Step Learning Guide for Beginners</h4>
              </a>
            </div>
            <div class="news-item">
              <a href="#">
                <div class="byline">June 13, 2019</div>
                <h4 class="news-title">The Future of Digital Retail: Interconnected Customer Data</h4>
              </a>
            </div>
            <div class="news-item">
              <a href="#">
                <div class="byline">June 12, 2019</div>
                <h4 class="news-title">Applying Graph Analytics to Game of Thrones</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="feature-box column medium-6 utility-collapse-bottom"
           style="background-image: url('/images/gc-large-audience.jpg');"
           data-equalizer-watch>
        <div class="feature-box_inner">
          <h3 class="section_title utility-collapse-bottom">Уже присоединились</h3>
          <div class="panel-recent-events">
            <nuxt-link to="/all" class="button feature-box_button">Смотреть всех</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "news"
    }
</script>

<style scoped>

</style>
