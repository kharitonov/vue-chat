import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import socketio from "socket.io-client";
import VueSocketIO from "vue-socket.io";

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: socketio("http://localhost:4113")
  })
);

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
