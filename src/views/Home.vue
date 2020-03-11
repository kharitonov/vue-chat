<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SocketListen />
   
  </div>
</template>

<script>
// @ is an alias to /src
import SocketListen from "@/components/SocketListen.vue";

export default {
  name: "Home",
  components: {
    SocketListen
  }
};
</script>
