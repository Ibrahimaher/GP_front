<template>
  <div class="chat-page">
    <div class="chat-container">
      <!-- عرض الرسائل هنا -->
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="message"
        ref="messageContainer"
      >
        <div
          :class="[
            message.sent ? 'sent' : 'received',
            message.sent ? 'message-right' : 'message-left',
          ]"
        >
          <p>{{ message.text }}</p>
          <span>{{ message.user }}</span>
        </div>
      </div>
    </div>
    <div class="input-container">
      <!-- حقل إدخال الرسائل -->
      <input
        type="text"
        v-model="newMessage"
        @keyup.enter="sendMessage"
        placeholder=" Write Your Massage Here"
      />
      <!-- زر إرسال الرسالة -->
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.messages.push({
          text: this.newMessage,
          user: "John",
          sent: true,
        });
        this.newMessage = "";

        // انتقل إلى أسفل الرسائل بمجرد إضافة رسالة جديدة
        this.scrollToBottom();
      }
    },
    scrollToBottom() {
      // انتقل إلى أسفل الرسائل
      this.$nextTick(() => {
        const messageContainer = this.$refs.messageContainer;
        messageContainer.scrollTop = messageContainer.scrollHeight;
      });
    },
  },
};
</script>

<style scoped>
/* تنسيق رسائل الشات */
.chat-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.chat-container {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column-reverse; /* عكس ترتيب الرسائل */
}

.message {
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end; /* ضبط موقع الرسائل على اليمين */
}

.sent {
  background-color: purple; /* لون الرسائل الصادرة */
  color: white;
  text-align: right;
  padding: 10px;
  border-radius: 10px;
  max-width: 70%; /* حد أقصى لعرض الرسائل */
}

.received {
  background-color: blue; /* لون الرسائل الواردة */
  color: white;
  text-align: left;
  padding: 10px;
  border-radius: 10px;
  max-width: 70%; /* حد أقصى لعرض الرسائل */
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

input[type="text"] {
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

button {
  background-color: #0084ff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* ضبط موقع الرسائل الواردة على الشمال */
.message-left {
  justify-content: flex-start;
}

/* ضبط موقع الرسائل الصادرة على اليمين */
.message-right {
  justify-content: flex-end;
}
/* Responsive Styles */

/* Small devices (up to 576px) */
@media screen and (max-width: 576px) {
  input[type="text"] {
    width: 90%;
  }

  button {
    padding: 8px 16px;
  }
}

/* Medium devices (576px - 768px) */
@media screen and (min-width: 576px) and (max-width: 768px) {
  input[type="text"] {
    width: 80%;
  }

  button {
    padding: 8px 16px;
  }
}

/* Large devices (768px - 992px) */
@media screen and (min-width: 768px) and (max-width: 992px) {
  input[type="text"] {
    width: 60%;
  }

  button {
    padding: 10px 20px;
  }
}
</style>
