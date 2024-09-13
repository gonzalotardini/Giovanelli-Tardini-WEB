<template>
  <b-navbar
    sticky
    type="dark"
    variant="dark"
    class="navbar"
    :class="{ 'navbar-shrink': isShrunk }"
  >
    <b-navbar-brand href="#">
      <!-- <img src="@/assets/icons/logo.png" alt="Logo" class="d-inline-block align-top" height="30" /> -->

      GIOVANELLI & TARDINI
    </b-navbar-brand>

    <b-navbar-nav
      class="d-flex w-100 justify-content-between align-items-center"
    >
      <div class="mx-auto d-flex justify-content-center">
        <b-nav-item
          v-for="i in menuOptions"
          :key="i.title"
          class="ml-3 mt-1"
          :href="i.href"
          >{{ i.title }}</b-nav-item
        >
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
  data() {
    return {
      isShrunk: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    menuOptions() {
      return this.$store.state.menuOptions;
    },
  },
  methods: {
    changeLanguage() {
      // Lógica para cambiar el idioma
    },
    handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 450) {
        this.isShrunk = true;
      } else if (scrollPosition < 400) {
        this.isShrunk = false;
      }
    },
  },
};
</script>
  
<style scoped>
/* Estilo de opciones de menú */
a.navbar-brand,
a.nav-link {
  color: white !important;
  font-size: 16px;
  letter-spacing: 0.2em;
}

@media (max-width: 1350px) {
  a.navbar-brand,
  a.nav-link {
    font-size: 0.7rem !important;
    letter-spacing: 0.2em;
  }
}

.navbar {
  background-color: #343a40 !important;
  height: 120px;
  transition: height .400s ease;
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

/* Estilos para tamaño navbar al scrollear */

.navbar-shrink {
  padding: 0.5rem;
  height: 80px;
}

.navbar-shrink .navbar-brand,
.navbar-shrink .nav-item a.nav-link {
  font-size: 0.8rem; /* Reducir el tamaño de la fuente */
}
</style>