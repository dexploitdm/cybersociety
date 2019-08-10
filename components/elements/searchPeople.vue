<template>
  <section class="search-people lg">
    <div class="search-layout">
      <div class="row">
        <div class="search-header">
          <div class="search-header__title">
            Interested?
          </div>
          <div class="search-header__desc">
            Here are two ways you can get started with SimilarWeb Today
          </div>
        </div>
        <div class="search-content">
          <a class="search-content-box">
            <div class="icon">
              <img src="/images/icons/globus.png">
            </div>
            <div class="button" @click="startSearch('geo')">
              искать по географии
            </div>
            <div class="search-text">
              Находите единомышленников
              в своем городе
            </div>
          </a>
          <a class="search-content-box two">
            <div class="icon">
              <img src="/images/icons/brain.png">
            </div>
            <div class="button" @click="startSearch('spec')">
              искать по специальности
            </div>
            <div class="search-text">
              Находите идейных профессионалов в команду
            </div>
          </a>
        </div>
      </div>
    </div>

    <search-modal
      v-if="modal"
      :title="titleModal"
      :desc="descModal"
      :isVacancy="idVacancy"
    />



  </section>
</template>

<script>
  import SearchModal from '@/components/app/libs/searchModal'
  export default {
    name: "searchPeople",
    components: {
      SearchModal
    },
    data() {
      return {
        modal: false,
        idVacancy: '',
        titleModal: '',
        descModal: ''
      }
    },
    methods: {
      startSearch(val) {
        this.modal = true
        if(val == 'spec'){
          this.titleModal = 'Находите идейных профессионалов в команду';
          this.descModal = 'Лояльные специалисты не менее важны чем высококвалифицированные';
          this.idVacancy = 'Должность'
        } else {
          this.titleModal = 'Находите единомышленников в своем городе'
          this.descModal = 'Обменивайтесь идеями и популяризируйте высокие технологии'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
