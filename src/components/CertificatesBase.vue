<template>
  
   <div class="d-grid gap-2" >
      <button class="btn btn-outline-secondary" style="margin-bottom: 1px;" @click="toggleCertiificates">СЕРТИФИКАТЫ</button>
   </div>

    <div class="list-group" v-show="isCertiificatesVisible">
       <button class="btn btn-secondary" style="margin-bottom: 1px; background: #6b9ccd;" @click="toggleVisibleSound">ЗВУКОИЗОЛЯЦИЯ</button>

      <div class="list-group" v-show="isVisibleSound">
          <div class="search row" >            
              <div class="col-12" >
                  <input type="text" class="form-control" placeholder="поиск..." v-model="$store.state.searchText" style="margin-top:5px;">
              </div>
          </div> 
          <button v-for="elem in getItems" :key="elem.Code" type="button"  class="list-group-item     list-group-item-action" aria-current="true">
              {{elem.Code}} {{elem.Name}}
          </button>
          <div id="carouselExampleControls" class="carousel slide"  data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
               <img src=" /1.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                 <img src=" /logo1.png" class="d-block w-100" alt="...">
             </div>
              <div class="carousel-item">
                  <img src="/3.png " class="d-block w-100" alt="...">
              </div>
            </div>
               <button class="carousel-control-prev" type="button"              data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next" type="button"               data-bs-target="#carouselExampleControls" data-bs-slide="next">
                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Next</span>
               </button>
              </div>
      </div>
       <button class="btn btn-secondary" style="margin-bottom: 2px;background: #6b9ccd;" @click="toggleVisibleAcoustic">АКУСТИКА</button>

       <div class="list-group" v-show="isVisibleAcoustic">
       <div class="search row" >            
            <div class="col-12" >
               <input type="text" class="form-control" placeholder="поиск..." v-model="$store.state.searchText" style="margin-top:5px;">
            </div>
       </div> 
       <button v-for="elem in getItems" :key="elem.Code" type="button" class="list-group-item     list-group-item-action" aria-current="true">
           {{elem.Code}} {{elem.Name}}
       </button>
       </div> 
    </div>
</template>

<script>
     
    import { mapGetters } from 'vuex'
    
    export default {
     
        data() {
      // Добавляем новое свойство в состояние компонента
      return {
            isCertiificatesVisible: false,// По умолчанию список видим
           
            isVisibleSound: false, // По умолчанию список видим
            isVisibleAcoustic: false, // По умолчанию список видим
            CertificatesImage:
            [
              {id:'1',img1:'public/logo1.png',img2:'public/logo1.png',img3:'public/logo1.png'},
              {id:'2',img1:'public/logo1.png',img2:'public/logo1.png',img3:'public/logo1.png'},
              {id:'3',img1:'public/logo1.png',img2:'public/logo1.png',img3:'public/logo1.png'},
             
                
            ]
              
                     
          }
        },
        methods:{
      // Метод для переключения видимости
          toggleCertiificates(){
           this.isCertiificatesVisible = !this.isCertiificatesVisible;
           
          },
          toggleVisibleSound(){
          
           this.isVisibleSound = !this.isVisibleSound;
          },
          toggleVisibleAcoustic(){
          
           this.isVisibleAcoustic = !this.isVisibleAcoustic;
          },
        },
        
        computed:{
          ...mapGetters(['getItemsM']),
          ...mapGetters(['getItems'])
        },
        

    }
  </script>