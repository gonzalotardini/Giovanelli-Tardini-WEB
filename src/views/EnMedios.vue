<template>
  <div>
    <b-jumbotron class="text-center" header="Nosotros En Los Medios">
    </b-jumbotron>
    <div class="mx-auto d-block w-50 h-50">
      <b-row class="d-flex justify-content-center">
        <a
          class=""
          href="https://caras.perfil.com/noticias/caras-glam/gala-caras-moda-tributo-diseno-creatividad.phtml"
          target="_blank"
        >
          <img class="h-100 w-100" src="../assets/caras.jpg" alt="" />
        </a>
      </b-row>
      <small>Revista Caras</small>

      <b-row class="my-4 d-flex justify-content-center">
        <b-btn
          class="w-25"
          variant="outline-dark"
          href="https://caras.perfil.com/noticias/caras-glam/gala-caras-moda-tributo-diseno-creatividad.phtml"
          target="_blank"
        >
          Mirá la nota
        </b-btn>
      </b-row>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
h1 {
  font-family: Rubik, Helvetica, Arial, sans-serif !important;
  font-weight: bold;
  font-size: 60px;
}
small {
    margin-left: -15px !important;
}
</style>