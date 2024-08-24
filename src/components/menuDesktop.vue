<template>
    <b-navbar type="dark" variant="dark" class="transparent-navbar">
      <b-navbar-brand href="#">
        <img src="@/assets/icons/logo.png" alt="Logo" class="d-inline-block align-top" height="30" />
        Giovanelli Tardini
      </b-navbar-brand>
      
      <b-navbar-nav class="d-flex w-100 justify-content-between align-items-center">
        <div class="mx-auto d-flex justify-content-center">
          <b-nav-item class="m-2" href="#">INICIO</b-nav-item>
          <b-nav-item class="m-2" href="#">SOBRE NOSOTROS</b-nav-item>
          <b-nav-item class="m-2" href="#">ÁREAS DE PRÁCTICA</b-nav-item>
          <b-nav-item class="m-2" href="#">CONTACTO</b-nav-item>
        </div>
  
        <div class="d-flex align-items-center">
          <b-nav-item href="#" @click="changeLanguage('es')">ES</b-nav-item>
          <span class="mx-1">|</span>
          <b-nav-item href="#" @click="changeLanguage('en')">EN</b-nav-item>
        </div>
      </b-navbar-nav>
    </b-navbar>
  </template>
  
  <script>
  export default {
    methods: {
      changeLanguage() {
        // Lógica para cambiar el idioma
      }
    }
  }
  </script>
  
  <style scoped>
/* Estilo de opciones de menú */
a.navbar-brand, a.nav-link {
  color: white !important;
  font-size: 16px;
  letter-spacing: .20em;
}
.transparent-navbar {
  background-color: #343a40 !important;
  height: 120px;
}

a.nav-link:hover {
  font-weight: bold !important;
}
/* Asegura que el menú principal se centre correctamente */
.d-flex {
  display: flex;
}

.w-100 {
  width: 100%;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.justify-content-center {
  justify-content: center;
}

.align-items-center {
  align-items: center;
}
  </style>