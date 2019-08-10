<template>
    <div class="header-box">
      <div class="row">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item>
            <nuxt-link to="/" class="logo">
              <img src="/images/logo.png">
            </nuxt-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title"><a>Люди</a></template>
            <el-menu-item index="2-1">
              <nuxt-link to="/people/search">
                Поиск единомышленников
              </nuxt-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <nuxt-link to="/people/training">
                Обучение
              </nuxt-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><a>Информация</a></template>
            <el-menu-item index="3-1">
              <nuxt-link to="/info/medicine">
                Медицина
              </nuxt-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <nuxt-link to="/info/programming">
                Программирование
              </nuxt-link>
            </el-menu-item>
            <el-menu-item index="3-3">
              <nuxt-link to="/info/economy">
                Экономика
              </nuxt-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><a>Инструменты</a></template>
            <el-menu-item index="4-1">
              <nuxt-link to="/instruments/medicine">Медицина</nuxt-link>
            </el-menu-item>
            <el-menu-item index="4-2">
              <nuxt-link to="/instruments/programming">
                Программирование
              </nuxt-link>
            </el-menu-item>
            <el-menu-item index="4-3">
              <nuxt-link to="/instruments/market">
                Рынок
              </nuxt-link>
            </el-menu-item>
            <el-menu-item index="4-4">
              <nuxt-link to="/instruments/made-solutions">
                Готовые решения
              </nuxt-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><a>О нас</a></template>
            <el-menu-item index="5-1">
              <nuxt-link to="/about">О нас</nuxt-link>
            </el-menu-item>
            <el-menu-item index="5-2">
              <nuxt-link to="/contacts">Контакты</nuxt-link>
            </el-menu-item>
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
        <el-button class="drawer-nav" size="mini" @click="openMenu">
          <i class="el-icon-s-fold"></i>
        </el-button>
      </div>
      <drawer-app :direction="'left'" :exist="true" ref="LeftDrawer"/>
    </div>
</template>

<script>
  import DrawerApp from '@/components/app/libs/DrawerApp'
    export default {
        name: "ElementHeader",
        data() {
          return {
            activeIndex: '1',
          };
        },
      components: {
        DrawerApp
      },
        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          },
          openMenu(){
            if(this.$refs.LeftDrawer.active){
              this.$refs.LeftDrawer.close();
            }else{
              this.$refs.LeftDrawer.open();
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
  .header-box {
    position: sticky;
    top: 0;
    background-color: white;
    width: 100%;
    z-index: 10;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  }
  ul.el-menu-demo {
    display: none;
    align-items: center;
  }
  .el-menu--popup {
    width: 400px;
    .el-menu-item a {
      color: #30333a;
      &:hover {
        color: #000;
      }
    }
  }
  .logo img {
    max-width: 100px;
  }
  .el-menu--popup-bottom-start .el-menu-item {
    margin: 10px 20px;
  }
  .el-submenu__title {
    color: #000;
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
  .drawer-nav {
    padding: 0;
    margin: 10px 0 10px 20px;
    i {
      font-size: 20px;
    }
  }
  @media (min-width: 968px) {
    .drawer-nav {
      display: none;
    }
    ul.el-menu-demo {
      display: flex;
    }
  }

</style>
