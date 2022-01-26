<template>
  <div class="wrap">
    <div v-if="showDate">
      {{ message.datetime }}
    </div>
    <v-card elevation="1" class="message rounded-xl" :class="{ owner }">
      <small><strong>{{ message.userName }}</strong></small>
      <div><p>{{ message.content }}</p></div>
      <p class="text-xs-right"><small>{{ message.datetime }}</small></p>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    index: { type: Number, required: true },
		messages: { type: Array, required: true },
    message: {
      type: Object,
      required: true
    },
    owner: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showDate() {
      return (
        this.message.datetime !== this.messages
      )
    }
  }
}
</script>

<style src="./Message.scss" lang="scss"></style>