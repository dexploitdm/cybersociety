<template>
  <div class="modal-search">
    <vue-particles
      color="#333"
      :particleOpacity="0.7"
      :particlesNumber="180"
      shapeType="circle"
      :particleSize="4"
      linesColor="#4f8df9"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.9"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>

    <div class="row modal-cons">
      <div class="modal-layout">
        <div class="modal-body">
          <div class="modal-flex">
            <div class="info">
              <div class="title">
                {{this.title}}
              </div>
              <div class="desc">
                {{this.desc}}
              </div>
              <div class="buttons">
                <a href="#" class="button--google">
                  <i class="fab fa-google"></i>
                  Signup with Google</a>
                <a href="#" class="button--google">
                  <i class="fab fa-google"></i>
                  Войти с помощью LinkedIn</a>
              </div>
            </div>
            <div class="form">
              <div class="controls-input">
                <el-input placeholder="Должность" v-model="vacancy"></el-input>
              </div>
              <div class="controls-input">
                <el-input placeholder="Учебное Заведение" v-model="school"></el-input>
              </div>
              <div class="controls-input">
                <el-input placeholder="Место Проживания" v-model="locale"></el-input>
              </div>
            </div>
          </div>
          <div class="start-search">
            <button type="submit">Найти</button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    props: ['title', 'desc'],
    name: "searchModal",
    data() {
      return {
        vacancy: '',
        school: '',
        locale: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  #particles-js {
    height: 100%;
  }
</style>
