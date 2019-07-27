<template>
    <div class="we">
      <div class="row">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item>
            <nuxt-link to="/" class="logo">
              <img src="/images/logo.png">
            </nuxt-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title"><nuxt-link to="/rr2">Люди</nuxt-link></template>
            <el-menu-item index="2-1">Поиск единомышленников</el-menu-item>
            <el-menu-item index="2-2">Обучение</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><nuxt-link to="/rr3">Информация</nuxt-link></template>
            <el-menu-item index="3-1">Медицина</el-menu-item>
            <el-menu-item index="3-2">Программирование</el-menu-item>
            <el-menu-item index="3-3">Экономика</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><nuxt-link to="/rr4">Инструменты</nuxt-link></template>
            <el-menu-item index="4-1">Медицина</el-menu-item>
            <el-menu-item index="4-2">Программирование</el-menu-item>
            <el-menu-item index="4-3">Рынок</el-menu-item>
            <el-menu-item index="4-4">Готовые решения</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><nuxt-link to="/rr4">О нас</nuxt-link></template>
            <el-menu-item index="5-1">О нас</el-menu-item>
            <el-menu-item index="5-2">Контакты</el-menu-item>
          </el-submenu>

          <el-menu-item index="6">
            <nuxt-link to="/rr6">
              Форум
            </nuxt-link>
          </el-menu-item>
          <div class="user-box">
            <el-button size="mini" type="danger">Поддержать</el-button>
            <div class="auth-box">
              <nuxt-link to="/login">Sign in</nuxt-link>
              <el-button type="info" size="mini" round><nuxt-link to="/register">Sign up</nuxt-link></el-button>
            </div>



          </div>
        </el-menu>
        <div class="line"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ElementHeader",
        data() {
          return {
            activeIndex: '1',
          };
        },
        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style lang="scss" scoped>
  ul.el-menu-demo {
    display: flex;
    align-items: center;
  }
  .el-menu--popup {
    width: 400px;
  }
  .logo img {
    max-width: 100px;
  }
  .el-menu--popup-bottom-start .el-menu-item {
    margin: 10px 20px;
  }
  .el-submenu__title a {
    color: #000;
  }
  .user-box {
    margin-left: auto;
    display: flex;
    align-items: center;
    button {
      margin-right: 10px;
    }
    .auth-box {
      a {
        color: #000;
      }
      button.el-button--info {
        margin-left: 5px;
        margin-right: 0;
        a {
          color: #fff;
        }
      }
    }
  }
</style>
