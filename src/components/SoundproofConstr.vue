<template>
  
  <div class="d-grid gap-2" >
      <button class="btn btn-outline-secondary" style="margin-bottom: 1px;" @click="toggleSoundInsulation">ЗВУКОИЗОЛЯЦИЯ</button>
  </div>

  <div class="list-group" v-show="isSoundInsulationVisible">
      <div class="search row" >            
        <div class="col-12" >
          <input type="text" class="form-control" placeholder="поиск..." v-model="$store.state.searchText" style="margin-top:5px;">
        </div>
      </div> 
      <button v-for="elem in getItems" :key="elem.Code" type="button" class="list-group-item     list-group-item-action" aria-current="true">
         {{elem.Code}} {{elem.Name}}
      </button>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    
    computed:{
      ...mapGetters(['getItems'])
    },
    data() {
      // Добавляем новое свойство в состояние компонента
      return {
        isSoundInsulationVisible: false,  // По умолчанию список видим
      }
    },
    methods:{
      // Метод для переключения видимости
      toggleSoundInsulation(){
        this.isSoundInsulationVisible = !this.isSoundInsulationVisible;
      }
    }
 
}
</script>

<style>

</style>

