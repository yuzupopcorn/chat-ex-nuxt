<template>
  <v-row dense>
    <v-text-field
      outlined
      dense
      rounded
      v-model="text"
      color="color"
      :append-icon="'mdi-send'"
      @keydown.enter="send"
      @click:append="send"
    />
  </v-row>
</template>

<script>
export default {
  name: 'ChatField',
  props: {
    color: {
      type: String,
      default: 'grey'
    }
  },
  data: () => ({
    text: '',
    write: false
  }),
  methods: {
    send() {
      this.$emit('send-message', this.text)
      this.text = ''
    }
  }
}
</script>

<style>

</style>