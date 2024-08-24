<template>
  <div class="contacto">
    <b-container class="pt-5 pb-5">
      <h1 class="text-center pb-5">Contacto</h1>
      <b-row>
        <b-col md="7" class="col-map" sm="12">
          <p>
            <i class="bi bi-geo-alt-fill"></i> Arenales 554, B1638 Vicente
            López, Provincia de Buenos Aires
          </p>
          <p><i class="bi bi-whatsapp"></i> +54 9 11 5767-2793</p>
          <p><i class="bi bi-envelope"></i> tuabogadoresponde@gmail.com</p>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.606578827545!2d-58.49526512350401!3d-34.58882005671287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb64742688765%3A0xcb658c2d2b9a7b58!2sFerreteria%20Tardini%20Hnos.!5e0!3m2!1ses-419!2sar!4v1724377449429!5m2!1ses-419!2sar"
              width="550"
              height="550"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </b-col>
        <b-col md="5" sm="12">
          <b-form @submit="onSubmit">
            <b-row>
              <b-col md="6" xs="12">
                <b-form-group
                  label="Nombre"
                  label-for="input-nombreaaaa"
                >
                  <b-form-input
                    id="input-nombre"
                    v-model="form.nombre"
                    required
                    placeholder="Nombre"
                  ></b-form-input>
                </b-form-group>
              </b-col>

              <b-col md="6" xs="12">
                <b-form-group
                  label="Apellido"
                  label-for="input-apellido"
                >
                  <b-form-input
                    id="input-apellido"
                    v-model="form.apellido"
                    required
                    placeholder="Apellido"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>

            <b-form-group
              label="Email"
              label-for="input-email"
            >
              <b-form-input
                id="input-email"
                type="email"
                v-model="form.email"
                required
                placeholder="nombre@ejemplo.com"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Consulta"
              label-for="input-consulta"
            >
              <b-form-textarea
                id="input-consulta"
                v-model="form.consulta"
                placeholder="Escribe tu consulta aquí"
                rows="5"
              ></b-form-textarea>
            </b-form-group>

            <b-button class="btn-block" type="submit" variant="dark"
              >Enviar</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "contact",
  components: {},
  data() {
    return {
      form: {
        nombre: "",
        apellido: "",
        email: "",
        consulta: "",
      },
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

</style>