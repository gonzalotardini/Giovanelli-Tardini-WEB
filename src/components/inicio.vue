<template>
  <div id="inicio">
    <b-carousel
      id="carousel"
      fade
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide
        class="img-fluid"
        :img-src="require('@/assets/torreView4.jpg')"
      >
        <div class="div-h">
          <h1 class="text-nowrap">GIOVANELLI & TARDINI</h1>
          <h4>ABOGADOS</h4>
          <b-btn href="#contacto" class="mt-4 custom-btn-dark"
            ><i class="bi bi-envelope-fill mr-2"></i> CONTACTANOS</b-btn
          >
        </div>
      </b-carousel-slide>

      <b-carousel-slide
        class="img-fluid d-flex align-items-center justify-content-center"
        :img-src="require('@/assets/socios.jpg')"
      >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style scoped>
>>> .img-fluid {
  max-height: 700px !important; /* Limita la altura máxima de la imagen */
  width: 100% !important; /* Asegura que la imagen mantenga su ancho completo */
  object-fit: cover !important; /* Ajusta la imagen para que mantenga proporciones dentro del espacio */
}
>>> img {
  filter: brightness(0.4); /* Reduce el brillo, oscureciendo la imagen */
}
>>> .carousel-caption {
  top: 30% !important;
  transform: translateY(-30%) !important;
  bottom: initial !important;
}
/* Ajuste de imagen */
>>> .carousel-inner,
>>> .carousel-item,
>>> .carousel-item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

#carousel {
  height: 700px;
}

h1 {
  font-size: 65px;
}

h3 {
  font-size: 40px;
}

h4 {
  font-size: 55px;
  font-weight: 200;
}

.custom-btn-dark {
  background-color: #37474f;
  color: #fff;
  border: none;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 12px 28px;
  transition: all 0.3s ease;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
}

.custom-btn-dark:hover {
  background-color: #455a64;
  transform: scale(1.05);
}

@media (max-width: 576px) {
  #carousel {
    height: 290px;
  }

  h1 {
    font-size: 25px;
  }

  h4 {
    font-size: 20px;
    font-weight: 200;
  }
}
</style>