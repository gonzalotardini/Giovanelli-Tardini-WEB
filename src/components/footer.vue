<template>
<div class="footer">
  <b-container class="pt-4">
    <b-row>
      <b-col>
        <p>
          <i class="bi bi-geo-alt-fill"></i> Arenales 554, B1638 Vicente López,
          Provincia de Buenos Aires
        </p>
        <p><i class="bi bi-whatsapp"></i> +54 9 11 5767-2793</p>
        <p><i class="bi bi-envelope"></i> tuabogadoresponde@gmail.com</p>
      </b-col>
      <b-col>
        <b-row>
            <p><i class="bi bi-whatsapp mr-2"></i></p>
            <p><i class="bi bi-instagram mr-2"></i></p>
            <p><i class="bi bi-facebook mr-2"></i></p>
            <p><i class="bi bi-tiktok"></i></p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
</svg></p>
        </b-row>        
      </b-col>
      <b-col><h5>footer</h5></b-col>
    </b-row>
  </b-container>
</div>
</template>
<script>
export default {
  name: "footer",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.footer {
  background-color: #242632;
  min-height: 200px;
}
p {
    color: rgb(124, 124, 124);
}
</style>