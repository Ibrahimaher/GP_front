<template>
  <link rel="stylesheet" href="chat_app.css" />
  <div class="chat-app">
    <div class="chat-messages">
      <chat-message
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
      />
    </div>
    <chat-input @message-sent="handleMessageSent" />
  </div>
</template>

<script>
import ChatMessage from "@/components/ChatMessage.vue";
import ChatInput from "@/components/ChatInput.vue";

export default {
  components: {
    ChatMessage,
    ChatInput,
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    handleMessageSent(message) {
      this.messages.push(message);
    },
  },
};
</script>

<style scoped>
.chat-app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.chat-messages {
  margin-bottom: 20px;
}
</style>
