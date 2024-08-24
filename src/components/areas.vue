<template>
    <b-container class="my-5" >
      <h1 class="text-center my-5">Áreas de Práctica</h1>
        <b-row class="pb-5">
            <b-col md="4" sm="12" class="text-center">
                <img :src="require('@/assets/icons/choque.svg')" alt="">
                <h5>Accidentes de tránsito</h5>
                <p>texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba </p>
            </b-col>
            <b-col md="4" sm="12" class="text-center">
                <img :src="require('@/assets/icons/ART.svg')" alt="">
                <h5>ART</h5>
                <p>texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba </p>
            </b-col>
            <b-col md="4" sm="12" class="text-center">
                <img :src="require('@/assets/icons/consumo.svg')" alt="">
                <h5>Derecho de consumo</h5>
                <p>texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba </p>
            </b-col>
        </b-row>
        <b-row class="pt-3">
            <b-col md="6" sm="12" class="text-center">
                <img :src="require('@/assets/icons/robo.svg')" alt="">
                <h5>Robo</h5>
                <p>texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba </p>
            </b-col>
            <b-col md="6" sm="12" class="text-center">
                <img :src="require('@/assets/icons/futbol.svg')" alt="">
                <h5>Derecho de Representación</h5>
                <p>texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba </p>
            </b-col>
        </b-row>
        <b-row>

        </b-row>
    </b-container>
  </template>
  
  <script>
  export default {
    name: "contact",
    components: {},
    data(){
      return {          
      }
    }
  };
  </script>

  <style scoped>
    img {
        max-height: 80%;
        max-width: 80px;
    }
  </style>