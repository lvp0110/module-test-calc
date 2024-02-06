<template>
  
  <div class="d-grid gap-2" >
      <button class="btn btn-outline-secondary" style="margin-bottom: 1px;" 
      @click="toggleCert">СЕРТИФИКАТЫ</button>
  </div>

  <div class="list-group" v-show="isCertVisible">
      <div class="search row" >            
        <div class="col-12" >
          <input type="text" class="form-control" placeholder="поиск..." 
          v-model="$store.state.searchText" style="margin-top:5px;">
        </div>
      </div> 
      <button v-for="elem in filteredCertificates" :key="elem.id" type="button" 
      class="list-group-item list-group-item-action" aria-current="true"
      @click="setActiveImages(elem, 'cert')" >
          {{elem.name}}
      </button>
      
  </div>
  <div class="d-grid gap-2" >
      <button class="btn btn-outline-secondary" style="margin-bottom: 1px;"
       @click="toggleTest">ПРОТОКОЛЫ ИСПЫТАНИЙ</button>
  </div>

  <div class="list-group" v-show="isTestVisible">
      <div class="search row" >            
        <div class="col-12" >
          <input type="text" class="form-control" placeholder="поиск..." 
          v-model="$store.state.searchText" style="margin-top:5px;">
        </div>
      </div> 
      <button v-for="elem in filteredTests" :key="elem.id" type="button" 
      class="list-group-item list-group-item-action" aria-current="true" @click="setActiveImages(elem, 'cert')">
          {{elem.name}}
      </button>
  </div>

  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    
    <button v-for="(image, index) in selectedImages" :key="index" type="button" 
      :class="{'active': index === 0}" 
      data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" 
      :aria-label="'Slide ' + (index + 1)"></button>
  </div>

  <div class="carousel-inner">

      <div v-for="(image, index) in selectedImages" :key="index" 
      :class="['carousel-item', { active: index === 0 }]">
        <img :src="image" class="d-block w-100" :alt="'Slide ' + (index + 1)" alt="щщщ">
      </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  
 
</template>

<script>

export default {
    
    data() {
      // Добавляем новое свойство в состояние компонента
      return {
        isCertVisible: false,  // По умолчанию список видим
        isTestVisible: false,  // По умолчанию список видим
        selectedCert:[],

        selectedImages: [],
        Certificate:[
          {id:1,name:'ЗИПС-Z4',images:['public/Z4/fire_cert.png','public/Z4/eco_cert.png','public/Z4/conf_cert.png','public/Z4/san_cert_1.png','public/Z4/san_cert_2.png']},
          {id:2,name:'Aku-Line',images:['public/Aku_line/fire_cert.png','public/Aku_line/san_cert_1.png','public/Aku_line/san_cert_2.png','public/Aku_line/eco_sert.png']},
          {id:3,name:'Вибросил(виброакустический герметик)',images:['','']},
          {id:4,name:'Шуманет-ЭКО Акустическая экологичная стеклоплита',images:['','']},
          {id:5,name:'Шумостоп-С2,стеклоплита',images:['','']},
          {id:6,name:'ЗИПС-Cinema',images:['','']},
        ],
        selectedTest:[],
        Test:[
          {id:1,name:'ЗИПС-Z4',images:['public/Z4/test_report1.png','public/Z4/test_report2.png']},
          {id:2,name:'Вибросил(виброакустический герметик)',images:['','']},
          {id:3,name:'Шуманет-ЭКО Акустическая экологичная стеклоплита',images:['','']},
          {id:4,name:'ЗИПС-Vector',images:['','']},
          {id:5,name:'Шумостоп-С2,стеклоплита',images:['',''],},
          
        ],
      }
    },
    computed: {

      // Обработка массива сертификатов
       filteredCertificates() {
        if (!this.$store.state.searchText) return this.Certificate; // Если строка поиска пустая, возвращаем все значения
        // Возвращаем отфильтрованный массив
         return this.Certificate.filter(elem => 
         elem.name.toLowerCase().includes(this.$store.state.searchText.toLowerCase())
       );
      },
        // Обработка массива протоколов испытаний
         filteredTests() {
           if (!this.$store.state.searchText) return this.Test;
           return this.Test.filter(elem => 
           elem.name.toLowerCase().includes(this.$store.state.searchText.toLowerCase())
         );
       }
      },

    methods:{

      setActiveImages(test) {
        this.selectedTest = test.images;
      },
      // Метод для переключения видимости
      toggleCert(){
        this.isCertVisible = !this.isCertVisible;
      },
      toggleTest(){
        this.isTestVisible = !this.isTestVisible;
      },

      setActiveImages(elem, type) {
      if (type === 'cert') {
        this.selectedImages = elem.images;
      } else if (type === 'test') {
        this.selectedImages = elem.images;
      }
      // Вызовите функцию обновления карусели, если есть такая 
        this.updateCarousel();
      },
      updateCarousel () {
        
      // Добавьте здесь логику для обновления карусели, если это требуется в вашем случае
      // Особенно это касается случаев, когда используются плагины или библиотеки,
      // которые требуют явного обновления/переинициализации карусели
      }
      
    }
 
}
</script>


  