<template>
  <div class="chat-container">
    <v-slide-y-reverse-transition>
      <v-card 
        v-if="chatOn"
        width="360"
        height="620"
        rounded="xl"
        class="chat-cover-card ma-0 pa-0"
        elevation="0"
      >
        <v-app-bar
          flat
          hide-on-scroll
          dense
        >
          <span class="pl-2"> {{ userName }} </span>
          <v-spacer/>
          <v-btn icon>
            <v-icon @click="hideChat">mdi-close</v-icon>
          </v-btn>
        </v-app-bar>
        <chat-contents
          ref="chatComponent" 
          class="chat-wrap"
          :serverURL="serverURL"
          :recieveURI="recieve"
          :subscribeURI="subscribe"
          :userName="userName"
          ></chat-contents>
      </v-card>
      <div v-else class="chat-button-cover">
        <v-fab-transition>
          <v-btn
            @click="showChat"
            fab
            :color="color"
          >
            <v-icon :color="iconColor"> {{ fabIcon }} </v-icon>
          </v-btn>
        </v-fab-transition>
      </div>
    </v-slide-y-reverse-transition>
  </div>
</template>

<script>
import ChatContents from "./messages/ChatContents.vue"

export default {
  name: 'Chat',
  components: { ChatContents },
  props: {
    fabIcon: {
      type: String,
      default : 'mdi-chat-processing'
    },
    adminRoute: {
      type: String,
      default: ''
    },
    userId: {
      type: String,
      default: '',
    },
    userName: {
      type: String,
      default: '',
    },
    adminId: {
      type: String,
      default: '',
    },
    subscribe: {
      type: String,
      default: '',
    },
    recieve: {
      type: String,
      default: '',
    },
    serverURL : {
      type: String,
      default : '',
    },
    color: {
      type: String,
      default: '#424242'
    },
    iconColor: {
      type: String
    }
  },
  data: () => ({
    chatOn: false,
    messages: [],
  }),
  methods: {
    showChat() {
      if(this.userId !== this.adminId) {
        this.chatOn = true
      } 
      // else this.$router.push(this.adminRoute)
    },
    hideChat() {
      this.chatOn = false
      this.$refs.chatComponent.disconnect()
    }
  }
}
</script>

<style src="./Chat.scss" lang="scss">
</style>