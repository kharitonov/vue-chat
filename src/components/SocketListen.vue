


<template>
  <div>
    <p v-if="isConnected">online</p>
     <div class="div1"><ul> <li v-for="array in chatHistory" v-bind:key="array"><b>{{ array.name }}:</b> {{ array.message }}</li></ul></div>
    <form @submit.prevent="sendMsg">
      <input type="text" v-model="name"/><input type="text" v-model="text" />
      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isConnected: false,
      text: null,
      name: null,
      chatHistory: []
    };
  },

  sockets: {
    connect(data) {
      this.isConnected = true;
      console.log("test", data);
      //this.chatHistory.push(data);
    },

    disconnect() {
      this.isConnected = false;
    },

    send(data) {
      if (this.chatHistory.length >= 20) {
          this.chatHistory.shift()
      }
      this.chatHistory.push(data);
    }
  },

  methods: {
    pingServer() {
      this.$socket.emit("pingServer", "PING!");
    },
    sendMsg() {
        this.$socket.emit("message", {name: this.name, message: this.text});
        this.text = null;
    }
  }
};
</script>


<style>
.div1 {
  width: 500px;
  height: 500px;
  margin: auto;
  align: center;
}

ul {
    list-style: none;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
