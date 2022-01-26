<template>
  <v-container fluid class="pa-0">
    <slot name="appBar"></slot>
    <div class="chat-chat" ref="block">
      <ul>
        <div>
          <message
            v-for="(message, index) in messages" :key="index"
            :messages="messages"
            :message="message"
            :index="index"
            :owner="message.userName === userName"
          />
        </div>
      </ul>
    </div>
    <v-container class="chat-form">
      <chat-field
        @send-message = sendMessage
      />
    </v-container>
  </v-container>
</template>

<script>
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'

import ChatField from './components/ChatField.vue'
import Message from './components/Message.vue'
export default {
  name: 'ChatContents',
  props: {
    userName: {
      type: String,
      default: '',
    },
    serverURL: {
      type: String,
      default: '',
    },
    subscribeURI : {
      type: String,
      default: '',
    },
    recieveURI : {
      type: String,
      default: '',
    },
  },
  data: () => ({
    messages: [],
  }),
  components: { Message, ChatField, },
  watch: {
    messages() {
      // 스크롤을 항상 하단에 위치시킴
      this.$nextTick(() => {
        let messages = this.$refs.block
        messages.scrollTo({top: messages.scrollHeight, behavior: 'smooth'})
      })
    }
  },
  methods: {
    connect() {
      let socket = new SockJS(this.serverURL);
      this.stompClient = Stomp.over(socket);
      console.log(`소켓 연결을 시도합니다. 서버 주소: ${this.serverURL}`)
      if(this.stompClient.connected) {
        this.disconnect()
      }
      this.stompClient.connect(
        {},
        frame => {
          this.connected = true;
          console.log('소켓 연결 성공', frame);
          this.stompClient.subscribe(this.subscribeURI, res => {
            console.log('구독으로 받은 메시지 입니다.', res.body);

            this.messages.push(JSON.parse(res.body))
          });
        },
        error => {
          // 소켓 연결 실패
          console.log('소켓 연결 실패', error);
          this.connected = false;
        }
      );        
    },
    sendMessage (data) {
      if(data !== ''){
        this.send(data)
      }
    },    
    send(data) {
      let datetime = new Date()
      console.log("Send message:" + data);
      if (this.stompClient && this.stompClient.connected) {
        const msg = { 
          userName:this.userName,
          content: data,
          datetime: datetime.toLocaleTimeString()
        };
        this.stompClient.send(this.recieveURI, JSON.stringify(msg), {});
      }
      console.log(this.messages)
    },
    disconnect() {
      if(this.stompClient !== null) {
        this.stompClient.disconnect();
      }
    },
    
  },
  created() { 
    this.connect();
  }
}

</script>

<style src="./ChatContents.scss" lang="scss">
</style>