<template>
  <div id="contacto" class="contacto">
    <b-container class="pt-5 pb-5">
      <h1 class="text-center pb-5">Contacto</h1>
      <b-row>
        <b-col md="7" class="col-map" sm="12">
          <p class="mb-0">
            <i class="bi bi-geo-alt-fill"></i> Arenales 554, B1638 Vicente
            López, Provincia de Buenos Aires
          </p>
          <p class="mb-0"><i class="bi bi-whatsapp"></i> +54 9 11 5767-2793</p>
          <p class="mb-0"><i class="bi bi-envelope"></i> estudio@giovanellitardini.com.ar</p>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.3858482199325!2d-58.47938661154669!3d-34.518451083332145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1de8399a889%3A0x5dfe42db62447a9e!2sTorre%20View!5e0!3m2!1ses-419!2sar!4v1734095998042!5m2!1ses-419!2sar"
              width="450"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </b-col>
        <b-col md="5" sm="12">
          <contactForm/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import contactForm from "./contactForm.vue";

export default {
  name: "contact",
  components: {contactForm},
  data() {
    return {
      form: {
        nombre: "",
        apellido: "",
        email: "",
        consulta: "",
      },
      isDesktop: window.innerWidth >= 992
    };
  },
  methods:{
    onSubmit(){
      var hola="";
      return hola;
    }
  }
};
</script>
<style>
/* Contenedor del iframe */
.map {
  position: relative;
  padding-bottom: 56.25%; /* Relación de aspecto 16:9 */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #eee;
}

/* iframe dentro del contenedor */
.map iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* iconos */
.bi-geo-alt-fill::before {
  vertical-align: text-top !important;
}

.col-map {
  border-right: solid;
  border-color: #ededed;
}

.contacto {
  background-color: #f2f2f2;
}

.border {
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
  border-radius: 7px !important;
    /* background-color: white; */
}

.contact-btn {
 background-color: #006b93 !important;
 border-color: #006b93 !important;
}

</style>