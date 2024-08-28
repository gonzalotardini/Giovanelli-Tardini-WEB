<template>
  <div align-h="center" class="text-center client-card">
    <b-card
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2 ml-2"
    >
      <b-card-text>
        <b-row align-v="center" class="text-center justify-content-center">
          <img src="../assets/perfil.png" alt="">
          <p class="m-0 ml-1">{{client.title}}</p>
        </b-row>
        <i v class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
        ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        <br />
        <span class="text-left">{{ client.description }}</span>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "clientCard",
  props: {
    client: Object,
  },
};
</script>

<style scoped>
h4,
p {
  color: black;
  text-shadow: none;
}

.client-card {
    align-content: center !important;
  display: flex;
    justify-content: center;
    align-items: center;
}

.client-card, .card-body {
  height: 250px;
  /* display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3; 
  text-overflow: ellipsis;
  height: 100%;  */

}
.card-text {
  height: 150px !important;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 5; 
  text-overflow: ellipsis;
  height: 100%;
}
.card-title {
  font-size: 100%;
}

i{
  color: #fbbc04 !important;
}

img{
  width: 32px;
  height: 32px;
}
</style>
