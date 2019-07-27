<template>
  <header class="header-app">
    <div class="row">

      <div class="header-layout">
        <div class="logo">
          <nuxt-link to="/">
            <img src="/images/logo.png">
          </nuxt-link>
        </div>
        <div class="header-menu">
          <ul class="header-menu-lists">
            <li class="menu-list parent-list">
              <nuxt-link class="link" to="/">Люди</nuxt-link>
              <ul class="menu-list-sub">
                <li class="sub-list">
                  <nuxt-link to="/">Поиск единомышленников</nuxt-link>
                </li>
                <li class="sub-list">
                  <nuxt-link to="/">Обучение</nuxt-link>
                </li>
              </ul>
            </li>
            <li class="menu-list parent-list">
              <nuxt-link class="link" to="/">Информация</nuxt-link>
              <ul class="menu-list-sub">
                <li class="sub-list">
                  <nuxt-link to="/">Медицина</nuxt-link>
                </li>
                <li class="sub-list">
                  <nuxt-link to="/">Программирование</nuxt-link>
                </li>
                <li class="sub-list">
                  <nuxt-link to="/">Экономика</nuxt-link>
                </li>
              </ul>
            </li>
            <li class="menu-list parent-list">
              <nuxt-link class="link" to="/">Инструменты</nuxt-link>
              <ul class="menu-list-sub">
                <li class="sub-list">
                  <nuxt-link to="/">Медицина</nuxt-link>
                </li>
                <li class="sub-list">
                  <nuxt-link to="/">Программирование</nuxt-link>
                </li>
                <li class="sub-list">
                  <nuxt-link to="/">Рынок</nuxt-link>
                </li>
                <li class="sub-list">
                  <nuxt-link to="/">Готовые решения</nuxt-link>
                </li>
              </ul>
            </li>
            <li class="menu-list parent-list">
              <nuxt-link class="link" to="/">О нас</nuxt-link>
              <ul class="menu-list-sub">
                <li class="sub-list">
                  <nuxt-link to="/">О нас</nuxt-link>
                </li>
                <li class="sub-list">
                  <nuxt-link to="/">Контакты</nuxt-link>
                </li>
              </ul>
            </li>
            <li class="menu-list">
              <nuxt-link class="link" to="/">Форум</nuxt-link>
            </li>
            <li class="menu-list">
              <nuxt-link class="link" to="/">Поддержать</nuxt-link>
            </li>

          </ul>


          <div id="foo">f</div>

        </div>



      </div>
      fdgd
    </div>
  </header>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "AppHeader",
    mounted() {
      $('.parent-list').hover(
        function(){
          $(this).find('.menu-list-sub').fadeIn()
        });
    }
  }
</script>

<style scoped>
  header.stick {
    position: fixed;
    z-index: 102;
    width: 100%;
    background-color: #fff;
  }
</style>
