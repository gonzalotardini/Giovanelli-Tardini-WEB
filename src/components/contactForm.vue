<template>
  <div class="contacto">
    <b-form
      :class="isDesktop ? 'px-4' : 'px-2'"
      class="border py-4"
      @submit="onSubmit"
    >
      <h4 class="text-center mb-4">Envianos tu consulta</h4>
      <b-row>
        <b-col md="6" xs="12">
          <b-form-group label-for="input-nombre">
            <b-input-group>
              <b-input-group-prepend is-text>
                <i class="bi bi-person"></i>
              </b-input-group-prepend>

              <b-form-input
                id="input-nombre"
                v-model="form.nombre"
                required
                placeholder="Nombre"
              ></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col md="6" xs="12">
          <b-form-group label-for="input-apellido">
            <b-input-group>
              <b-input-group-prepend is-text>
                <i class="bi bi-person"></i>
              </b-input-group-prepend>

              <b-form-input
                id="input-apellido"
                v-model="form.apellido"
                required
                placeholder="Apellido"
              ></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-group label-for="input-email">
        <b-input-group>
          <b-input-group-prepend is-text>
            <i class="bi bi-envelope"></i>
          </b-input-group-prepend>
          <b-form-input
            id="input-email"
            type="email"
            v-model="form.email"
            required
            placeholder="nombre@ejemplo.com"
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group label-for="input-consulta">
        <b-form-textarea
          id="input-consulta"
          v-model="form.consulta"
          placeholder="Escribe tu consulta aquí"
          rows="5"
        ></b-form-textarea>
      </b-form-group>

      <b-button class="btn-block" type="submit" variant="dark">ENVIAR</b-button>
    </b-form>
  </div>
</template>
  
  <script>
export default {
  name: "contactForm",
  components: {},
  data() {
    return {
      form: {
        nombre: "",
        apellido: "",
        email: "",
        consulta: "",
      },
      isDesktop: window.innerWidth >= 992,
    };
  },
  methods: {
    onSubmit() {
      var hola = "";
      return hola;
    },
  },
};
</script>
<style scoped>
.border {
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
  border-radius: 7px !important;
  /* background-color: white; */
}

.contact-btn {
  background-color: #006b93 !important;
  border-color: #006b93 !important;
}

input,
textarea,
.input-group-text {
  border-radius: unset;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: white;
}
</style>