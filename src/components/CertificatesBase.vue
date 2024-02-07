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
<!-- Карусель -->
  <!-- <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"> -->
<div id="carouselExampleIndicators" class="carousel slide" :class="{'carousel-hidden': !isCarouselVisible}" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button v-for="(image, index) in selectedImages" :key="index" type="button" 
    :class="{'active custom-indicator active': index === 0, 'custom-indicator': index !== 0}"  
      data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" 
      :aria-label="'Slide ' + (index + 1)"></button>
  </div>

  <div class="carousel-inner" >
      <div v-for="(image, index) in selectedImages" :key="index" 
      :class="['carousel-item', { active: index === 0 }]">
        <img :src="image" class="d-block w-100" :alt="'Slide ' + (index + 1)" alt="...">
      </div>
  </div>
 
  <button class="carousel-control-prev custom-control-prev-icon" type="button"  
  data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next custom-control-prev-icon" type="button" 
  data-bs-target="#carouselExampleIndicators" data-bs-slide="next" >
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
        isCarouselVisible: false,
        isCertVisible: false,  // По умолчанию список видим
        isTestVisible: false,  // По умолчанию список видим
        selectedCert:[],
        selectedImages: [],
        Certificate:[
          {id:1,name:'ЗИПС-Z4',images:['/Z4/fire_cert.png','/Z4/eco_cert.png','/Z4/conf_cert.png','/Z4/san_cert_1.png','/Z4/san_cert_2.png']},
          {id:2,name:'Аku-Line',images:['/Aku_line/fire_cert.png','/Aku_line/san_cert_1.png','/Aku_line/san_cert_2.png','/Aku_line/eco_sert.png']},
          {id:3,name:'Вибросил(виброакустический герметик)',images:['/Vibrosil/fire_cert_vibrosil.png','/Vibrosil/san_cert_vibrosil_1.png','/Vibrosil/san_cert_vibrosil_2.png','/Vibrosil/san_cert_vibrosil_3.png','/Vibrosil/san_cert_vibrosil_4.png']},
          {id:4,name:'Шуманет-ЭКО Акустическая экологичная стеклоплита',images:['/Eco/fire_cert_eco.png','/Eco/cert_eco.png','/Eco/san_cert_eco_1.png','/Eco/san_cert_eco_2.png']},
          {id:5,name:'Шумостоп-С2,стеклоплита',images:['/C2/cert_C2.png','/C2/csan_cert_C2_1.png','/C2/csan_cert_C2_2.png','/C2/csan_cert_C2_3.png','/C2/fire_cert_C2.png']},
        ],
        selectedTest:[],
        Test:[
          {id:1,name:'ЗИПС-Z4',images:['/Z4/test_report1.png','/Z4/test_report2.png']},
          {id:2,name:'Вибросил(виброакустический герметик)',images:['/Vibrosil/test_report_vibrosi_1.png','/Vibrosil/test_report_vibrosil_2.png','/Vibrosil/test_report_vibrosil_3.png']},
          {id:3,name:'Шуманет-ЭКО Акустическая экологичная стеклоплита',images:['/Eco/test_report_eco_1.png','/Eco/test_report_eco_2.png','/Eco/test_report_eco_3.png','/Eco/test_report_eco_4.png']},
          {id:4,name:'Шумостоп-С2,стеклоплита',images:['/C2/test_report_C2_1.png','/C2/test_report_C2_2.png','/C2/test_report_C2_3.png','/C2/test_report_C2_4.png','/C2/test_report_C2_2.1_1.png','/C2/test_report_C2_2.1_2.png','/C2/test_report_C2_2.1_3.png'],},
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
      if (this.selectedImages === elem.images && this.isCarouselVisible) {
         this.isCarouselVisible = false; // Скрываем карусель
      } else {
         this.selectedImages = elem.images; // Обновляем выбранные изображения
         this.isCarouselVisible = true; // Показываем карусель
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
<style>
  .carousel-hidden {
    display: none;
  }
  /* Стили для индикаторов карусели */
  .custom-indicator {
    background-color: gray; /* Цвет кнопок индикатора */
  }

  /* Стили для кнопок управления "Предыдущий/Следующий" */
  /* Пример изменения цвета иконок */
  .custom-control-prev-icon,
  .custom-control-next-icon {
    filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg); 
    
  }
 
  /* Цвет активного индикатора */
  .custom-indicator.active {
    background-color: gray; 
    filter: drop-shadow(2px 2px 2px black);
  }

</style>

