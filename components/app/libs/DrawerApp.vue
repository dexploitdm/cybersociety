<template>
  <div v-if="enabled">
    <aside class="sidebar drawer" :style="style" ref="element">
      <slot>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <div class="logo">
            <nuxt-link to="/">
              <img src="/images/logo.png">
            </nuxt-link>
          </div>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span><nuxt-link to="/rr1">Люди</nuxt-link></span>
            </template>
            <el-menu-item-group title="Люди">
              <el-menu-item index="1-1">Поиск единомышленников</el-menu-item>
              <el-menu-item index="1-2">Обучение</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-cpu"></i>
              <span><nuxt-link to="/rr1">Информация</nuxt-link></span>
            </template>

            <el-menu-item-group title="Информация">
              <el-menu-item index="2-1">Медицина</el-menu-item>
              <el-menu-item index="2-2">Программирование</el-menu-item>
              <el-menu-item index="2-3">Экономика</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-set-up"></i>
              <span><nuxt-link to="/rr1">Инструменты</nuxt-link></span>
            </template>

            <el-menu-item-group title="Инструменты">
              <el-menu-item index="3-1">Медицина</el-menu-item>
              <el-menu-item index="3-2">Программирование</el-menu-item>
              <el-menu-item index="3-3">Рынок</el-menu-item>
              <el-menu-item index="3-4">Готовые решения</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span><nuxt-link to="/rr1">О нас</nuxt-link></span>
            </template>

            <el-menu-item-group title="О нас">
              <el-menu-item index="4-1">О нас</el-menu-item>
              <el-menu-item index="4-2">Контакты</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


        </el-menu>
      </slot>
    </aside>
    <div class="overlay" ref="overlay"></div>
  </div>
</template>
<script>
  export default {
    name: "DrawerApp",
    props: ['direction', 'exist'],
    data() {
      return {
        auto_speed: '0.3s',
        manual_speed: '0.03s',
        threshold: 20,
        startTime: null,
        startPos: null,
        translate: null,
        active: false,
        visible: true,
      }
    },
    computed: {
      element: function () {
        return this.$refs.element;
      },
      overlay: function () {
        return this.$refs.overlay;
      },
      enabled: function () {
        if (this.exist == true) {
          return true;
        }
        return false;
      },
      style: function () {
        if (this.direction == 'right') {
          return 'transform:translate3d(100%,0,0);right:0;';
        }
        return 'transform:translate3d(-100%,0,0);left:0;';
      },
    },
    mounted() {
      document.addEventListener('touchstart', (e) => {
        this.handleStart(e)
      });
      document.addEventListener('touchmove', (e) => {
        this.handleMove(e)
      });
      document.addEventListener('touchend', (e) => {
        this.handleEnd(e)
      });
      document.addEventListener('touchcancel', (e) => {
        this.handleEnd(e)
      });
      window.addEventListener('resize', (e) => {
        this.setVisibality(e)
      }, true);
      this.overlay.addEventListener('transitionend', (e) => {
        this.handleZindex(e)
      }, false);
      this.overlay.addEventListener('click', (e) => {
        this.close()
      }, false);
      this.setVisibality();
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      setVisibality() {
        if (this.element.offsetWidth == 0) {
          this.visible = false;
        } else {
          this.visible = true;
        }
      },
      handleStart(e) {
        this.startTime = new Date().getTime();
        this.startPos = e.targetTouches[0].pageX;
        this.element.style.transitionDuration = this.manual_speed;
      },
      handleMove(e) {
        let gesture = this.gesture(e);
        let valid = this.validate(this.direction, gesture);
        if (valid) {
          let percent = this.percentage(this.direction, gesture);
          if (this.direction == 'left') {
            this.translate = (e.touches[0].pageX - this.element.offsetWidth);
            if (this.translate < 0) {
              this.element.style.transform = 'translate3d(' + this.translate + 'px,0,0)';
            } else {
              this.open();
            }
          } else {
            this.translate = -(screen.width - this.element.offsetWidth - e.touches[0].pageX);
            if (this.translate > 0) {
              this.element.style.transform = 'translate3d(' + this.translate + 'px,0,0)';
            } else {
              this.open();
            }
          }
          this.overlayOpacity(percent / 100);
        }
      },
      handleEnd(e) {
        let speed = this.speed(e);
        let gesture = this.gesture(e);
        let valid = this.validate(this.direction, gesture);
        if (valid) {
          if (speed > 0.6) {
            if (!this.active) {
              this.open();
            } else {
              this.close();
            }
          } else {
            if (this.element.offsetWidth / 2 > Math.abs(this.translate)) {
              this.open();
            } else {
              this.close();
            }
          }
        }
      },
      handleZindex() {
        let opacity = window.getComputedStyle(this.overlay).getPropertyValue('opacity');
        if (opacity <= 0) {
          this.overlay.style.zIndex = -999;
          console.log('close')
          let body = document.body;
          body.removeAttribute("class");
        }
      },
      validate(direction, gesture) {
        if (direction == 'left') {
          if ((this.active && gesture == 'swiperight') || (!this.active && (gesture == 'swipeleft' || this.startPos > this.threshold))) {
            return false;
          }
        } else {
          if ((this.active && gesture == 'swipeleft') || (!this.active && (gesture == 'swiperight' || this.startPos < (screen.width - this.threshold)))) {
            return false;
          }
        }
        if ((document.querySelector('.sidebar.active') && !this.active) || !this.visible) {
          return false;
        }
        return true;
      },
      overlayOpacity(opacity) {
        this.overlay.style.opacity = opacity;
        if (opacity > 0) {
          this.overlay.style.zIndex = 999;
          let body = document.body;
          body.classList.add("drawer-open");
        }
      },
      gesture(e) {
        let directions = [
          'swipeleft',
          'swiperight',
        ];
        let currentPos = e.changedTouches[0].pageX;
        if ((this.startPos - currentPos) < 0) {
          return directions[1];
        } else {
          return directions[0];
        }
      },
      open() {
        this.translate = 0;
        this.element.style.transform = 'translate3d(' + this.translate + ',0,0)';
        this.element.style.transitionDuration = this.auto_speed;
        this.overlayOpacity(1);
        this.lock(document.querySelector('html'));
        this.lock(document.querySelector('body'));
        this.element.classList.add('active');
        this.active = true;
      },
      close() {
        if (this.direction == 'left') {
          this.translate = '-' + this.element.offsetWidth + 'px';
        } else {
          this.translate = this.element.offsetWidth + 'px';
        }
        this.element.style.transform = 'translate3d(' + this.translate + ',0,0)';
        this.element.style.transitionDuration = this.auto_speed;
        this.overlayOpacity(0);
        this.unlock(document.querySelector('html'));
        this.unlock(document.querySelector('body'));
        this.element.classList.remove('active');
        this.active = false;
      },
      speed(e) {
        let time = new Date().getTime() - this.startTime;
        let startP = Math.abs(this.startPos);
        let endP = Math.abs(e.changedTouches[0].pageX);
        let distance = startP > endP ? (startP - endP) : (endP - startP);
        return distance / time;
      },
      percentage(direction, gesture) {
        let percentage = 0;
        let test = [];
        if (direction == 'left') {
          test = ['swipeleft', 'swiperight']
        } else {
          test = ['swiperight', 'swipeleft']
        }
        if (this.active && gesture == test[0]) {
          percentage = 100 - Math.round(Math.abs(this.translate) / this.element.offsetWidth * 100);
        }
        if (!this.active && gesture == test[1]) {
          percentage = Math.round(100 - Math.abs(this.translate) / this.element.offsetWidth * 100);
        }
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        return percentage;
      },
      lock(element) {
        element.style.overflow = 'hidden';
        element.style.touchAction = 'none';
      },
      unlock(element) {
        element.style.removeProperty('overflow');
        element.style.removeProperty('touch-action');
      }
    }
  }
</script>
<style scoped>
  .drawer-open div.overlay {
    position: fixed;
    z-index: -999;
    left: 0;
    top: 0;
    background: rgba(11, 10, 12, 0.35);
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease;
  }

  aside.sidebar {
    z-index: 9999;
    position: fixed;
    will-change: transform;
    height: 100%;
    top: 0px;
    transition: transform 0.3s ease;
    background: #fff;
    width: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    word-wrap: break-word;
  }
</style>
