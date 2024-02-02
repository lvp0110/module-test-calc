<template>
  <div class="container-xl">
    <h1 style="padding-top:10px;">dataBase{{ title }}</h1>
  </div>
  <hr>
<div class="sc accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
           <h3>материалы</h3>
        </button>
      </h2>
      <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <SoundproofMaterial />
          <AcousticMaterial />
          <VibrationMaterial />
        </div>
      </div>
    </div>
  
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
           <h3>конструкции</h3>
        </button>
      </h2>
      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <SoundproofConstr />
          <AcousticConstr />
          <VibrationConstr />
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
           <h3>документы</h3>
        </button>
      </h2>
      <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <LoginForm/>
          <CertificatesBase/>
          <TechnicalBase/>
          <InstallBase/>
					<TestBase />
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
           <h3>калькулятор</h3>
        </button>
      </h2>
      <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <CalcConstruction :options="options"/>
        </div>
      </div>
    </div>
</div>
  
</template>

<script >

  import InstallBase from "./components/InstallBase.vue";
  import TechnicalBase from "./components/TechnicalBase.vue";
  import CertificatesBase from "./components/CertificatesBase.vue";
  import SoundproofConstr from "./components/SoundproofConstr.vue";
  import AcousticConstr from "./components/AcousticConstr.vue";
  import VibrationConstr from "./components/VibrationConstr.vue";
  import SoundproofMaterial from "./components/SoundproofMaterial.vue";
  import AcousticMaterial from "./components/AcousticMaterial.vue";
  import VibrationMaterial from "./components/VibrationMaterial.vue";
  import SearchItems from "./components/SearchItems.vue";
  import CalcConstruction from "./components/CalcConstruction.vue";
  import LoginForm from "./components/LoginForm.vue";
  import TestBase from "./components/TestBase.vue";
  import { mapState } from 'vuex'

  export default {
    created()
    {
      this.$store.dispatch('getData')
      this.$store.dispatch('getSecondArray')
    },
    components:{
      InstallBase,
      TechnicalBase,
      CertificatesBase,
      SoundproofConstr,
      AcousticConstr,
      VibrationConstr,
      SoundproofMaterial,
      AcousticMaterial,
      VibrationMaterial,
			CalcConstruction,
			LoginForm,
      SearchItems,
      TestBase
    },
    computed: {
      ...mapState(['title', 'options'])
   }
  }
</script>

<style>
h1{
  filter: drop-shadow(1px 2px 1px rgb(109, 109, 109));
	
} 
h3{
  font-family: Montserrat, sans-serif ;
  
}
hr{
	margin: 10px auto 20px;
	padding: 1px;
	filter: drop-shadow(2px 3px 2px );
	background: #000;
	width: 95%;
	opacity: 0.7;
} 
.logo{
	width: 35px;
	position: absolute;
	margin-top:5px;
	margin-left: -28px;
}
.accordion-button {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: 1.3rem;
    color: #fff;
    text-align: left;
    background-color: #6b9ccd;
    border: 0;
    border-radius: 0;
    overflow-anchor: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease;font-weight: 600;
}
.accordion-button:not(.collapsed) {
    color: #0c63e4;
    background-color: #fcfdfd;
    box-shadow: inset 0 -1px 0 rgba(243, 106, 106, 0.125);
    
}  
  
</style>
