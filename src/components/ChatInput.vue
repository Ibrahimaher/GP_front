<template>
  <div class="chat-input">
    <input
      v-model="inputMessage"
      @keyup.enter="sendMessage"
      placeholder="Type your message..."
    />
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputMessage: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.inputMessage.trim() !== "") {
        this.$emit("message-sent", this.inputMessage);
        this.inputMessage = "";
      }
    },
  },
};
</script>

<style scoped>
.chat-input {
  display: flex;
  margin-top: 10px;
}

.chat-input input {
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 5px;
}

.chat-input button {
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
