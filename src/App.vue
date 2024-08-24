<template>
  <div id="app">
    <a href="https://wa.me/5491234567890?text=Hola%20quisiera%20más%20información" class="whatsapp-float" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-whatsapp"></i>
    </a>
    <menuDesktop v-if="isDesktop" />
    <menuMobile v-else />
    <home />
    <areas />
    <conctact />
    <footerr />
  </div>
</template>

<script>
import menuDesktop from './components/menuDesktop.vue';
import menuMobile from './components/menuMobile.vue';
import home from './components/home.vue';
import areas from './components/areas.vue';
import conctact from './components/contact.vue';
import footerr from './components/footer.vue';
export default {
  name: 'App',
  components: {
    menuDesktop,
    menuMobile,
    home,
    areas,
    conctact,
    footerr
  },
  data() {
    return {
      isDesktop: window.innerWidth >= 992
    }
  },
  mounted() {
  },
  methods: {
    changeLanguage() {
      // Lógica para cambiar el idioma
    }
  }
}
</script>

<style>
#app {
  font-family: Rubik, Helvetica, Arial, sans-serif;
}
.mobile-menu {
  height: 100% !important;
}
</style>

<style scoped>
.whatsapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.whatsapp-float i {
  width: 100%;
  height: auto;
  padding: 10px;
  vertical-align: text-top !important;
}
</style>
